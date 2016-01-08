
;(function() {
  var menuButton, navigationMenu, menuHeader, navigationList;
    menuButton = document.querySelector('.main-nav__button');
    navigationMenu = document.querySelector('.main-nav');
    menuHeader = document.querySelector('.main-nav__menu-header');
    navigationList = document.querySelector('.main-nav__list');

  if (window.matchMedia("(max-width: 1200px)").matches) {
    window.onload = function() {
      navigationMenu.classList.add('main-nav--overlap');
      menuHeader.classList.add('main-nav__menu-header--closed-menu');
      navigationList.classList.add('main-nav__list--closed');
    }
  }

  window.addEventListener('resize', function() {
        navigationMenu.classList.add('main-nav--overlap');
        menuHeader.classList.add('main-nav__menu-header--closed-menu');
        navigationList.classList.add('main-nav__list--closed');
        menuButton.classList.remove('main-nav__button--close');
  });

  menuButton.addEventListener('click', function(event) {
    event.preventDefault();
      menuButton.classList.toggle('main-nav__button--close');
      menuHeader.classList.toggle('main-nav__menu-header--closed-menu');
      navigationList.classList.toggle('main-nav__list--closed');
  });
})();
