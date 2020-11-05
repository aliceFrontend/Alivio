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

  let promt__login = document.querySelector('#login');
  let promt__password = document.querySelector('#password');
  let modal__btn = document.querySelector('.modal__btn');

  function CreateAndDelete(){

    menu__link.classList.toggle('menu-link__active');
    header__navs.classList.toggle('header__navs-active');
    hidden.classList.toggle('hidden');
  }

  menu__link.addEventListener("click", CreateAndDelete);
  header__navs.addEventListener("click", CreateAndDelete);
  
  auth__sign_btn.addEventListener("click",()=>{
    modal__wrapper.classList.toggle('modal__active');
    hidden.classList.toggle('hidden');
  });

  cross.addEventListener("click",()=>{
  modal__wrapper.classList.toggle('modal__active');
  hidden.classList.toggle('hidden');
  });
 

  // promt__login.addEventListener("click", ()=>{
  //   let modal__promt_login = document.querySelector('.modal__promt-login');
    
  //   if(promt__login.validity.valid == false){

  //     modal__promt_login.classList.toggle('block');
  //   } else{

  //      modal__promt_login.classList.remove('block');
  //      modal__promt_login.classList.add('none');
  //   }

  //   console.dir(promt__login);
  // });

  // promt__password.addEventListener("click",()=>{
  //   let modal__promt_password = document.querySelector('.modal__promt-password');
  //   modal__promt_login.style.display = "none";

  //   if(promt__password.validity.valid == false){

  //     modal.promt__password.classList.toggle('block');

  //   } else{

  //      modal.promt__password.classList.remove('block');
  //      modal.promt__password.classList.add('none');
  //   }
  // });
 }
