import jQuery from 'jquery';
/*------------------------------------*\
    #Menu
\*------------------------------------*/
let menu =  document.getElementById('js-menu');
let menuBtnWrap = document.getElementById('js-menu-btn-wrap');
let menuBtn = document.getElementById('js-menu-btn');

let description =  document.getElementById('js-description');

let openMember =  document.getElementById('js-member');

//let openMember = document.querySelectorAll('.js-member');

let closeBtn = document.getElementById('js-close');
let backBtn = document.getElementById('js-back-team');

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
    if (menu.classList.contains('is--hidden')) {
        menu.classList.remove('is--hidden');
        menu.classList.add('is--visible');
    } else {
        menu.classList.add('is--hidden');
        menu.classList.remove('is--visible');
    }
});

window.$ = jQuery;

// Close Menu Btn //
menuBtnWrap.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}, false);


/*------------------------------------*\
    # E Q U I P A 
\*------------------------------------*/

// Open Member Description Btn //
openMember.addEventListener('click', function() {
    if (description.classList.contains('is---hidden')) {
        description.classList.remove('is---hidden');
        description.classList.add('is---visible');
    } else {
        description.classList.add('is---hidden');
        description.classList.remove('is---visible');
    }
});

window.$ = jQuery;


// Close Menu Btn //
closeBtn.addEventListener('click', function() {
    description.classList.toggle('active');
}, false);

// Back to Team Btn //
backBtn.addEventListener('click', function() {
    description.classList.toggle('active');
}, false);


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
// Selector Box - Servicos //
$('.selector').click(function(){
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


