var navMain = document.querySelector('.page-header__wrapper');
var btnOpenClose = document.querySelector('.page-header__nav-button');

btnOpenClose.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__wrapper--closed')) {
    navMain.classList.remove('page-header__wrapper--closed');
    navMain.classList.add('page-header__wrapper--opened');
  } else {
    navMain.classList.remove('page-header__wrapper--opened');
    navMain.classList.add('page-header__wrapper--closed');
  }
});
