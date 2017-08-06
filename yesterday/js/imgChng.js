$(document).ready(function(){
    var imgH = $('.imgFrame').outerHeight();
    console.log(imgH);
    var imgW = $('.imgFrame').outerWidth();
    console.log(imgW);

    if(imgH >= imgW) {
        $('.img').css('height', '100%');
        $('.')
    } else {
        $('.img').css('width', '100%');
    }
    
    $('.img').addClass('blur');
    
    $('.img').hover(function() {
        $(this).removeClass('blur');
    },
    function(){
        $(this).addClass('blur');
    });
});