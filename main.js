$(document).ready(function() {
    getData();
});

function getData () {
    $.getJSON('data.json', function(data) {
        var topspots_data = '';
        $.each (data, function(key, value){
            topspots_data += '<tr>';
                topspots_data += '<td>' +value.name+ '</td>';
                topspots_data += '<td>' +value.description+ '</td>';
                topspots_data += '<td> <a href="http://www.google.com/maps?q='+value.location+'">Open in Google</a></td>';
            topspots_data += '</tr>'; 
        });
        $('#topspots').append(topspots_data);
        console.log(topspots_data);
    })
}