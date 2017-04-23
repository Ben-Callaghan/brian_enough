$(document).ready(function(){
    $('.box, .imgFrame').each(function() {
        var ran = Math.floor(Math.random()*100);
        $(this).css('order', ran);
        console.log($(this).css('order'));
    });
});