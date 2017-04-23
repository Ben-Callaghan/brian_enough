function randGrad() {
 
    var c1 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255),
        a: ((Math.floor(Math.random()*6)+4)/10)
    };
    
    console.log(c1.r);
    console.log(c1.g);
    console.log(c1.b);
    console.log(c1.a);
    
    c1.rgba = 'rgba('+c1.r+','+c1.g+','+c1.b+','+c1.a+')';
    
    console.log(c1.rgba);

    var randDeg1 = Math.floor(Math.random()*360);

    return 'linear-gradient('+randDeg1+'deg, '+c1.rgba+', rgba(0,0,0,0))';     
}

$(document).ready(function() {
    $('.grad, .sign').each(function() {
        var col = randGrad();
        console.log(col);
        $(this).css("background", col);
    });
});