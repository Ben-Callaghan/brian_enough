
//  █████╗ ██████╗ ██████╗  █████╗ ██╗   ██╗███████╗
// ██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝██╔════╝
// ███████║██████╔╝██████╔╝███████║ ╚████╔╝ ███████╗
// ██╔══██║██╔══██╗██╔══██╗██╔══██║  ╚██╔╝  ╚════██║
// ██║  ██║██║  ██║██║  ██║██║  ██║   ██║   ███████║
// ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝

// Breaking down artwork details
var artworkCSVArray = csv.split('*');

// breaking down comments

var commentArrayPerArtist = comment.split('~');

var twoDimCommentArr = [];

commentArrayPerArtist.forEach(function(item){
  var tempArr = item.split('*');
  twoDimCommentArr.push(tempArr);
});

console.log(twoDimCommentArr);

// breaking down tags

var tagArray = tags.split('*');

var tagsComplexArray = tagsComplex.split('*');

var twoDimTagArr = [];

tagsComplexArray.forEach(function(item){
  var tempArr = item.split('#');
  twoDimTagArr.push(tempArr);
});

// declare array for selected tags
var tagsSelected = [];

// declare array for art objects
var artworkObjArray = [];

// iterate over array, putting artwork details into individual objects
var csvLength = (artworkCSVArray.length/3);

for (i=0; i<csvLength; i++) {
  var artworkObjID = twoDimTagArr[i].splice(0,1);

  artworkObjArray[i] = {
    artist: artworkCSVArray.splice(0,1),
    title: artworkCSVArray.splice(0,1),
    year: artworkCSVArray.splice(0,1),
    id: artworkObjID,
    tags: twoDimTagArr[i],
    visible: false
  }
}

// Declaring arrays for author sigs

var sigArr = ['Gordon',
              'Chris',
              'Notes',
              'Lauren',
              'Victoria',
              'Ana',
              'Aimee',
              'Martin',
              'Georgia',
              'Action'];

var sigSignArr = ["(◞≼۩۞۩≽◟◞౪◟◞≼۩۞۩≽◟)",
                  "(;´༎ຶ益༎ຶ`)♡",
                  "ῆõནპჰ",
                  "ू꒰΄ ิ̤۝ ิ ̤꒱ु",
                  "༼ ༎ຶ ෴ ༎ຶ༽",
                  "(๑ ऀืົཽ₍₍ළ₎₎ ऀืົཽ)✧",
                  "╰༼=ಠਊಠ=༽╯",
                  "┣¨ｷ(〃ﾟ3ﾟ〃)┣¨ｷ",
                  "(ノಠ益ಠ)ノ彡┻━┻",
                  "მეནἶõῆ"];

// Declare functions
// Sort visible items function
function sortVisible(){
  console.log('sorting visible...')
  artworkObjArray.forEach(function(item){
    var len=item.tags.length;
    for (p=0; p < len; p++) {
      if (tagsSelected.includes(item.tags[p])) {
        item.visible = true;
        break;
      } else {
        item.visible = false;
      }
    }

    if (item.visible === true) {
      $('.'+item.id).show();
    } else {
      $('.'+item.id).hide();
    }
  });
}

// Toggle Visible function

function toggleVisibleButton (buttonClass, toggleClass) {
  $(buttonClass).click( function(){
    $(toggleClass).toggle();
  })
}

function menuButton (menu, menuButton) {
  console.log(menu);
  console.log(menuButton);
  if($(menu).hasClass('none')) {
    var inner = $(menuButton).html();
    $(menuButton).html('- '+inner+' -');
    $(menu).removeClass('none');
  } else {
    var inner = $(menuButton).html();
    var len = inner.length-2;
    var nInner =  inner.slice(2,len);
    $(menuButton).html(nInner);
    $(menu).addClass('none');
  }
}
// // click outside to close

function clickOutside(e1, e2, e3) {
  console.log('called clickOutside');
  $(document).mouseup(function(e){
    var container = $(e1);
    var container2 = $(e2);
    var container3 = $(e3);
    var container4 = $('.tag');
    var container5 = $('#drawerHandle');
    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0
        && !container2.is(e.target) && container2.has(e.target).length === 0
        && !container3.is(e.target) && container3.has(e.target).length === 0
        && !container4.is(e.target) && container4.has(e.target).length === 0
        && !container5.is(e.target) && container5.has(e.target).length === 0)
    {
        if (!container.hasClass('none')) {
          console.log(e1);
          console.log(e1+'Button');
          menuButton(e1, e1+'Button');
        }
    }
  });
}

//buttonDown class toggler
function toggleClassButton (buttonClass, toggleClass) {
  $(buttonClass).click( function(){
    console.log('called toggleClassButton');
    $(this).toggleClass(toggleClass);
  });
}

function selectTag (tagClass) {
  console.log('called selectTag with tag '+tagClass);
  if(tagsSelected.includes(tagClass)) {
    console.log('found '+tagClass);
    // find where the tag is in tag selected
    var index = tagsSelected.indexOf(tagClass);
    // take the tag out of tagSelected array
    tagsSelected.splice(index, 1);
    // remove the tagSelected class from the tag in the DOM
    $('.'+tagClass+'Tag').removeClass('tagSelected');
  } else {
    // put the selected tag into the tagSelected Array
    tagsSelected.push(tagClass);
    // add the selected tag class to that tag in the DOM
    $('.'+tagClass+"Tag").addClass('tagSelected');
    console.log(tagClass+" wasn't on the list, added it.");
  }
}

function toggleTagVisible (buttonClass, tagClass) {
  $(buttonClass).click( function() {
    console.log('you pressed: '+tagClass);
    selectTag(tagClass);
    $('.noneButton').removeClass('tagMenuItemButtonDown');
    $('.allButton').removeClass('tagMenuItemButtonDown');
    console.log('called toggleTagVisible');
    sortVisible();
  });
}

function showAll(){
    tagsSelected.length = 0;
    $('.tagMenuTag').each(function(){
      if( $(this).hasClass('tagMenuItemButtonDown') === false){
        $(this).addClass('tagMenuItemButtonDown');
      }
    });

    $('.noneButton').removeClass('tagMenuItemButtonDown');

    var tagsTemp = tags.split('*');
    tagsTemp.forEach(function(e){
      selectTag(e);
    });
    console.log('called showAll');
    sortVisible();
}

function showNone (buttonClass) {

    tagsSelected.length = 0;

    $('.tag').each(function(){
      $(this).removeClass('tagSelected');
    });

    $('.tagMenuTag').removeClass('tagMenuItemButtonDown');
    $('.noneButton').addClass('tagMenuItemButtonDown');
    console.log('called showNone');
    sortVisible();
}

function searchFunc () {
  var filter = $('#input').val().toUpperCase();
  console.log(filter);
  $('.item').each(function() {
    if ($(this).html().toUpperCase().indexOf(filter) > -1) {
      $(this).removeClass('none');
    } else {
      $(this).addClass('none');
    }
  });
}

// ██████╗ ██╗   ██╗███╗   ██╗    ████████╗██╗███╗   ███╗███████╗
// ██╔══██╗██║   ██║████╗  ██║    ╚══██╔══╝██║████╗ ████║██╔════╝
// ██████╔╝██║   ██║██╔██╗ ██║       ██║   ██║██╔████╔██║█████╗
// ██╔══██╗██║   ██║██║╚██╗██║       ██║   ██║██║╚██╔╝██║██╔══╝
// ██║  ██║╚██████╔╝██║ ╚████║       ██║   ██║██║ ╚═╝ ██║███████╗
// ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝       ╚═╝   ╚═╝╚═╝     ╚═╝╚══════╝

$(document).ready(function(){
  // $('#tagMenu').toggle();
  // $('#infoMenu').toggle();

  // add artwork objects to page
  for (i=0; i<artworkObjArray.length; i++) {
    var itemBlank = "<div class='item "+ artworkObjArray[i].id+"'><div class='work'>"+ artworkObjArray[i].artist +", <span class='title'><i>"+ artworkObjArray[i].title +"</i></span>, <span class='year'>"+ artworkObjArray[i].year + "</span>";
    $('#itemContainer').append(itemBlank);
  }

  // add comments to artwork entries
  twoDimCommentArr.forEach(function(e){
    var art = $('.'+e[0]);
    console.log(art);
    for(i=1; i < (e.length-1); i+=2) {
    console.log(e[i]);
    console.log(e[i+1]);
    var commentBlank = "<div class='description "+e[i]+"'><span class='bodyCopy'>"+e[i+1]+"</span></div>";
    art.append(commentBlank);
    }
  });

  // add signatures to comments
  var sigLen = sigArr.length;
  console.log(sigLen);

  for (i=0; i < sigLen; i++ ) {
    var sig = $('.'+sigArr[i]);
    $('.'+sigArr[i]).append("<div style='width: 100%; height: 5em;'><div class='avatar'>"+ sigSignArr[i] +"</div></div>")
  }

  // put spacer at the end of item container div
  $('#itemContainer').append("<div class='endSpacer'></div>");

  // add tag divs to artwork items on page
  for (i=0; i<artworkObjArray.length; i++) {
    var id = artworkObjArray[i].id;
    var tags = artworkObjArray[i].tags;
    console.log('adding tags for '+ id)
    var tagLen = artworkObjArray[i].tags.length;
    for (p=0; p < tagLen; p++) {
      $("."+ id).addClass(tags[p]+"Item");
      $("."+ id).append("<div class='tag "+ tags[p] +"Tag'>"+ tags[p] +"</div>");
    }
    console.log('finished adding tags for '+artworkObjArray[i].id);
  }

  var tagsOnPage = $('.tag');

  tagsOnPage.each(function(e, obj){
    var inner = $(this).html();
    //add button toggle function
    $(this).click( function(){
      console.log($(this));

      selectTag(inner);
      $('.noneButton').removeClass('tagMenuItemButtonDown');
      $('.allButton').removeClass('tagMenuItemButtonDown');
      sortVisible();
    });
  });

  // add tags from tagArray to tag menu, also classes to ITEMS on page

  tagArray.forEach(function(item){
    $('#menuContent').append("<div class='tagMenuTag "+item+"Button'>+ " +item+ "</div>");
    toggleTagVisible('.'+item+'Button', item);
    toggleClassButton('.'+item+'Button', 'tagMenuItemButtonDown' );
  });

  // calling button functions
  // Menu toggle clicks
  $('#tagMenuButton').click(function(){
    menuButton('#tagMenu', '#tagMenuButton');
  });

  $('#infoMenuButton').click(function(){
    menuButton('#infoMenu', '#infoMenuButton');
  });

  $('.infoMenuX').click(function(){
    menuButton('#infoMenu', '#infoMenuButton');
  });

  $('#drawerHandle').click(function(){
    menuButton('#tagMenu', '#tagMenuButton');
    console.log('called menuButton')
    if($('#tagMenu').hasClass('none')){
      $(this).html('<div class="button">></div>');
    } else {
      $(this).html('<div class="button"><</div>');
    }
  });

  $('.allButton').click(function(){
    showAll();
  });

  $('.noneButton').click(function(){
    showNone();
  });


  clickOutside('#infoMenu', '#tagMenu', '#footer');
  clickOutside('#tagMenu', '#infoMenu', '#footer');

  sortVisible();

  //Debug

  // $(window).keypress(function(e) {
  //      var key = e.which;
  //      console.log(key);
  //
  //      if (key === 116) {
  //        console.log(tagsSelected);
  //      }
  //      if (key === 97) {
  //        showAll();
  //      }
  //      if (key === 115) {
  //        showNone();
  //      }
  //      if (key === 100) {
  //        menuButton('#tagMenu', '#tagMenuButton');
  //      }
  //      if (key === 102) {
  //        menuButton('#infoMenu', '#infoMenuButton');
  //      }
  // });
});
