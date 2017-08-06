var back = document.getElementById("gradient");
var dispTogA = document.getElementById("dispTogA");
var dispTogB = document.getElementsByClassName("dispTogB");

window.onload = function () {
    dispTogA.style.display = "none";
}

function randRGB() {
 
    var c1 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
  
    var c2 = {
        r: Math.floor(Math.random()*255),
        g: Math.floor(Math.random()*255),
        b: Math.floor(Math.random()*255)
    };
             
    c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
    c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';

    var randDeg1 = Math.floor(Math.random()*360);
    var randDeg2 = Math.floor(Math.random()*360);

    return 'linear-gradient('+randDeg1+'deg, '+c1.rgb+', rgba(0,0,0,0)), linear-gradient('+randDeg2+'deg, '+c2.rgb+', rgba(0,0,0,0))';    
}

back.style.background = randRGB();

function displayCell() {

    if (dispTogA.style.display === "none") {
        dispTogA.style.display = "block";
        for (i=0; i<dispTogB.length; i++) {
            dispTogB[i].style.display = "none";
        }
    } else {
        dispTogA.style.display = "none";
        for (i=0; i<dispTogB.length; i++) {
            dispTogB[i].style.display = "block";
        }
    }
}