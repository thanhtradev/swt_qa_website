$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://api.bakarya.com/api/qa",
        dataType: "json",
        success: function (data) {
            console.log(data);
            var html = '';
            $.each(data, function (i, item) {
                var full_name = item.full_name ? item.full_name : ''
                var question = item.question ? item.question : ''
                var phone = item.phone ? item.phone : ''
                var email = item.email ? item.email : ''

                html += '<tr><th scope="row">' + i + '</th><td>' + question + '</td><td>' + full_name + '</td><td>' + phone + '</td><td>' + email + '</td></tr>';
                /* <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr> */
            });
            $('#questions').append(html);
        }
    })
});