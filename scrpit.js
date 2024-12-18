$(document).ready(function () {
    $('#contact-form').submit(function (event) {
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
        if (name && email && message) {
            alert('Thank you for your message, ' + name + '!');
            $(this).trigger('reset');
        } else {
            alert('Please fill out all required fields.');
        }
    });
});