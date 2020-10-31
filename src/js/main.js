$(document).ready(function(){
  var link = $('.menu-link');
  var link__active = $('.menu-link__active');
  var menu = $('.header__navs');
  var nav__link = $('.header__navs a');

  link.click(function(){
    link.toggleClass('menu-link__active');
    menu.toggleClass('header__navs-active');
  })
  nav__link.click(function(){
    link.toggleClass('menu-link__active');
    menu.toggleClass('header__navs-active');
  })
})