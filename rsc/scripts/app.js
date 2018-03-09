import jQuery from 'jquery';
/*------------------------------------*\
    #Menu
\*------------------------------------*/
let menu =  document.getElementById('js-menu');
let menuBtn = document.getElementById('js-menu-btn');
/**
 * check if is mobile device based on media queries
 */
const isMobile = () => window.matchMedia( "(max-width: 64rem)" ).matches;
if (!isMobile()) {
    // for desktop:
    
}
else {
    // for mobile:
    
}

// Open Menu Btn //
menuBtn.addEventListener('click', function() {
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
menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}, false);



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