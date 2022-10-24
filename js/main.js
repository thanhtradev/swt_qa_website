$(function () {

	'use strict';

	// Form

	var contactForm = function () {

		if ($('#contactForm').length > 0) {
			$("#contactForm").validate({
				rules: {
					question: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					question: "Please enter a question or comment.",
				},
				/* submit via ajax */
				submitHandler: function (form) {
					var $submit = $('.submitting'),
						waitText = 'Submitting...';

					$.ajax({
						type: "POST",
						url: "http://localhost:5000/api/qa",
						data: $(form).serialize(),

						beforeSend: function () {
							$submit.css('display', 'block').text(waitText);
						},
						success: function (msg) {
							if (msg.message == 'OK') {
								$('#form-message-warning').hide();
								setTimeout(function () {
									$('#contactForm').fadeOut();
								}, 1000);
								setTimeout(function () {
									$('#form-message-success').fadeIn();
								}, 1400);

							} else {
								$('#form-message-warning').html(msg);
								$('#form-message-warning').fadeIn();
								$submit.css('display', 'none');
							}
						},
						error: function () {
							$('#form-message-warning').html("Something went wrong. Please try again.");
							$('#form-message-warning').fadeIn();
							$submit.css('display', 'none');
						}
					});
				}

			});
		}
	};
	contactForm();

});