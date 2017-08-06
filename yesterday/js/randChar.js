var charArray = [
    "!","£","$","%","^","&","*","#",">","<","+"
]

function randChar() {
    var randChar = charArray[Math.floor(Math.random()*11)];
    return randChar;
}

$(document).ready(function(){ 
    for ( i = 0; i < 500; i++) {
        console.log(randChar());
        var col = randCol();
        $('.flex').append("<div class='char drag' style='color:"+randCol()+"'>"+randChar()+"</div>");
    };
});