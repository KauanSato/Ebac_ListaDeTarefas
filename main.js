$(document).ready(function(){
    $('#body').submit(function(event) {
        event.preventDefault();

        $('#Button').on('click', function () {
            var Text = $('#Text').val();
            if (Text.length > 0) {
                addTarefa(Text);
                $('#Text').val('');
            }
        });
});

function addTarefa(text) {
    $('#taskList').append('<li><span>&times;</span>' + text + '</li>');
}

});

$(document).on('click', 'li', function() {
    $(this).toggleClass('completed');
});