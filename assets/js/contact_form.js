$(document).ready(function() {
    $('#contact').on('submit', function(event) {
        event.preventDefault();

        $.ajax({
            url: $(this).attr('action'),
            method: $(this).attr('method'),
            data: new FormData(this),
            processData: false,
            contentType: false,
            success: function(response) {
                $('#contact')[0].reset();
                alert('Form submitted successfully!');
            },
            error: function(xhr, status, error) {
                alert('There was a problem submitting the form.');
                console.error('Error:', error);
            }
        });
    });
});