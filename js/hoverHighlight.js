$(document).ready(function(){
    $('.box').hover(function() {
        $(this).addClass('hover');
    },
    function(){
        $(this).removeClass('hover');
    });
});