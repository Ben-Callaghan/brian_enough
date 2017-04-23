var hide = document.getElementsByClassName("hide");

window.onload = function () {
    for(i=0; i<hide.length; i++){
        hide[i].style.display = "none";
    }
}

function displaySrc () {
    for(i = 0; i < hide.length; i++) {
        if (hide[i].style.display === "none") {
            hide[i].style.display = "block";
        } else {
            hide[i].style.display = "none";
        }
    }
}