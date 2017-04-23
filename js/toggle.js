$(document).ready(function() {
    $('.hide').hide();
    $('.click').click(function() {
        $(this).next().toggle();
    });
});