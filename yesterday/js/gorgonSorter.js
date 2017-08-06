$(document).ready(function(){
    // Suits 4
    // Cards per suit 5

    function placement(){
        var page = Math.floor(Math.random()*80);
        var face = Math.floor(Math.random()*2);
        var pageEdge = Math.floor(Math.random()*3);

        return page+'-'+face+'-'+pageEdge;
    };
    
    $('.button').click(function(){
        var copies, totalCards, serial, packs, suit, card, page, face, pageEdge;

        copies = $('.inputBox').val();
            console.log('number of copies '+copies);

        //$('.inputBox').hide();
        //$('.button').hide();
        $('body').append('number of copies: '+ copies, '<br> <br>');

        packs = (Math.floor(copies/4))+1;
        remainder = (4-(copies%4));
        totalCards = ((copies*5)+(remainder*5));
        totalPacks = packs+remainder;
            console.log('packs = '+packs);
            console.log('remainder = '+remainder);
            console.log('totalPacks = '+totalPacks);
            console.log('totalCards = '+ totalCards);

        var copy = 1;

        for (i=1; i < packs; i++) {
            for (p=1; p < 5; p++) {
                for(r=1; r<6; r++) { 
                var serialX = copy+'-'+p+'-'+r+' / '+placement();
                $('body').append(serialX, '<br>');
                }
            copy += 1;
            }
        }

        console.log('done first for loop!');
    });
});