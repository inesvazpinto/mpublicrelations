import jQuery from 'jquery';

window.$ = jQuery;

const body = $('#js-top');


let menu =  document.getElementById('js-menu');
let menuBtnWrap = document.getElementById('js-menu-btn-wrap');
let menuBtn = document.getElementById('js-menu-btn');

/*------------------------------------*\
    #Menu
\*------------------------------------*/

//let description =  document.getElementById('js-description');

//let openMember =  document.getElementById('js-member');

//let openMember = document.querySelectorAll('.js-member');

//let closeBtn = document.getElementById('js-close');
//let backBtn = document.getElementById('js-back-team');


/**
 * check if is mobile device based on media queries
 */
 /*
const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;
if (!isMobile()) {
    // for desktop:
    
}
else {
    // for mobile:
    
}*/

// Open Menu Btn //
menuBtnWrap.addEventListener('click', function() {
  menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
    if (menu.classList.contains('is--hidden')) {
        menu.classList.remove('is--hidden');
        menu.classList.add('is--visible');
    } else {
        menu.classList.add('is--hidden');
        menu.classList.remove('is--visible');
    }
}, false);

/**
 * Changes - Click event on menuBtnWrap already exists at top; no need for another
 */
// Close Menu Btn //
/*menuBtnWrap.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}, false);*/


/*------------------------------------*\
    # E Q U I P A 
\*------------------------------------*/

/**
 * changes - not is---hidden but is--hidden
 * check ID's of descriptions. Each ID has to be unique
 */
$(document).on('click', '.js-member', function() {
  let $self = $(this), $desc = $self.find('.description');
  
  if ($desc.hasClass('is---hidden')) {
    $desc.removeClass('is---hidden').addClass('is--visible');
    setTimeout(() => {$(body).addClass('is--hidden')}, 200);
  } else {
    $(body).removeClass('is--hidden');
    setTimeout(() => {
      $desc.removeClass('is--visible').addClass('is---hidden');
      setTimeout(() => {
        $desc.animate({scrollTop: 0}, 0);
      }, 1000);
    }, 200);
  }
});

$('.js-member').find('a').on('click', function() {
  $(this).parent().trigger('click');
  $('html, body').animate({scrollTop: $('.container-team').offset().top}, 0);
  return false;
});

// Open Member Description Btn //
/*openMember.addEventListener('click', function() {
    if (description.classList.contains('is---hidden')) {
        description.classList.remove('is---hidden');
        description.classList.add('is---visible');
    } else {
        description.classList.add('is---hidden');
        description.classList.remove('is---visible');
    }
});*/


/**
 * Changes - Call jquery once at top; it was declared to times
 */
//window.$ = jQuery;


// Close Menu Btn //
/*closeBtn.addEventListener('click', function() {
    description.classList.toggle('active');
}, false);*/

// Back to Team Btn //
/*backBtn.addEventListener('click', function() {
    description.classList.toggle('active');
}, false);*/


// Open Member Description Btn Será isto??? //
/*
const openDescription = (el) => {
    el.addEventListener('click', () => {
      let description =  document.getElementById('js-description');
      if (description.classList.contains('is---hidden')) {
        description.classList.remove('is---hidden');
        description.classList.add('is---visible');
      } else {
        description.classList.add('is---hidden');
        description.classList.remove('is---visible');
      }
    })
};*/

/*------------------------------------*\
    # S E R V I Ç O S
\*------------------------------------*/

/**
 * Changes - Change the class selector to ID'S when possible
 */

// Selector Box - Servicos //
$('#js-btn-select-box').click(function(){
  $(this).toggleClass('open');
  $('.options-box').toggleClass('open');
});

$('.option-item').click(function(){
  var selection = $(this).text();
  var dataValue = $(this).attr('data-value');
  var text = $(this).attr('data-text');
  $('.selected-option span').text(selection);
  $('.selector').attr('data-selected-value',dataValue);
  $('.options-box').toggleClass('open');

  $('.selected-option-text span').text(text);
  $('.selected-option-title').text(dataValue);
});




