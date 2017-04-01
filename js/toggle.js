$('#switch-forms .btn').on('click', function() {
    $('#switch-forms .btn').removeClass('active');
    $(this).addClass('active');
});
$('#login_click').on('click', function() {
    $('#register_form').hide();
    $('#login_form').show();
});
$('#register_click').on('click', function() {
    $('#login_form').hide();
    $('#register_form').show();
});