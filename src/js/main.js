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

  let auth__sign_btn = document.querySelector('.auth__sign-btn');
  let modal__wrapper = document.querySelector('.modal__wrapper');
  let cross = document.querySelector('.modal__close');

  function CreateAndDelete(){

    menu__link.classList.toggle('menu-link__active');
    header__navs.classList.toggle('header__navs-active');
    hidden.classList.toggle('hidden');
  }

  menu__link.addEventListener("click", CreateAndDelete);
  header__navs.addEventListener("click", CreateAndDelete);
  auth__sign_btn.addEventListener("click",()=>{
    modal__wrapper.style.display = "block";
    hidden.classList.toggle('hidden');
  });
  cross.addEventListener("click",()=>{
  modal__wrapper.style.display = "none"; 
  hidden.classList.toggle('hidden');
  });
 
  
}
