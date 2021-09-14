var header = document.querySelector('.page-header');
var btnOpenClose = document.querySelector('.page-header__nav-button');

header.classList.remove('page-header-no-js');

btnOpenClose.addEventListener('click', function() {
  if (header.classList.contains('page-header--closed')) {
    header.classList.remove('page-header--closed');
    header.classList.add('page-header--opened');
  } else {
    header.classList.remove('page-header--opened');
    header.classList.add('page-header--closed');
  }
});
