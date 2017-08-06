$(document).ready(function(){
    var dragDivs =  $('.drag').length;
    console.log(dragDivs);

    var zArray = [];
    var zArrayNum = 0;

    $('.card').each(function(){
        $(this).css("z-index", zArrayNum);
        zArray[zArrayNum] = $(this).css("z-index");
        console.log("z-index: " + zArray[zArrayNum]);
        zArrayNum += 1;
        console.log("Array Num: " + zArrayNum);        
    });

    $('.card').on('mousedown', function(){
        var last = Number(zArray[zArray.length-1]);
        console.log("Array Last: " + last);
        last += 1;
        console.log("Array Last +1: " + last);
        $(this).css("z-index", last);
        $('.card').each(function(){
            var z = $(this).css("z-index");
            console.log(z);
            $(this).css("z-index", (z-1));
        });
    });
});