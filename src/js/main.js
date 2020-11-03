// $(document).ready(function(){
//   var link = $('.menu-link');
//   var link__active = $('.menu-link__active');
//   var menu = $('.header__navs');
//   var nav__link = $('.header__navs a');

//   link.click(function(){
//     link.toggleClass('menu-link__active');
//     menu.toggleClass('header__navs-active');
//   })
//   nav__link.click(function(){
//     link.toggleClass('menu-link__active');
//     menu.toggleClass('header__navs-active');
//   })
// })

window.onload = function(){

  let menu__link = document.querySelector('.menu-link');
  let header__navs = document.querySelector('.header__navs');
  let hidden = document.querySelector('body');

  function CreateAndDelete(){

    menu__link.classList.toggle('menu-link__active');
    header__navs.classList.toggle('header__navs-active');
    hidden.classList.toggle('hidden');
  }

  menu__link.addEventListener("click", CreateAndDelete);
  header__navs.addEventListener("click", CreateAndDelete);
  
}






  // menu__link.onclick = function(){

  //   CreateAndDelete();
  // }
  // header__navs.onclick = function(){

  //   CreateAndDelete();
  // }