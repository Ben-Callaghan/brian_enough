function randCol (){
    var c1 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };

    c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';

    return c1.rgb;
}