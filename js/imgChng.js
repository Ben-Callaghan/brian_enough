$(document).ready(function(){
    $('.img').addClass('blur');
    
    $('.img').hover(function() {
        $(this).removeClass('blur');
    },
    function(){
        $(this).addClass('blur');
    });
});