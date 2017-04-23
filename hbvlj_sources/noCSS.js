var fullCSS = "hbvlj.css";
var noCSS = "no.css";

function noCSSfn() {
 
    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    
    
    newlink.setAttribute("href", noCSS);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    
    document.getElementById("ON").style.textDecoration = "line-through";
    
    document.getElementById("OFF").style.textDecoration = "none";
}

function fullCSSfn() {
 
    var oldlink = document.getElementsByTagName("link").item(0);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    
    
    newlink.setAttribute("href", fullCSS);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
    
    document.getElementById("OFF").style.textDecoration = "line-through";
    
    document.getElementById("ON").style.textDecoration = "none";
}

