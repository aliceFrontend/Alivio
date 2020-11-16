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
  let auth__sign_btn_mobile = document.querySelector('.auth__sign-btn-mobile');
  let modal__wrapper = document.querySelector('.modal__wrapper');
  let cross = document.querySelector('.modal__close');
  let modal__show = document.querySelector('.modal');

  function CreateAndDelete(){

    menu__link.classList.toggle('menu-link__active');
    header__navs.classList.toggle('header__navs-active');
    hidden.classList.toggle('hidden');
  }

  menu__link.addEventListener("click", CreateAndDelete);
  // header__navs.addEventListener("click", CreateAndDelete);
  
  auth__sign_btn.addEventListener("click",()=>{
    modal__wrapper.classList.toggle('modal__active');
    modal__show.classList.toggle('modal__show');
    hidden.classList.toggle('hidden');
    let body = document.querySelector('body');
     hidden.addEventListener("click", ()=>{
        console.log("click!");
      });
  });

  auth__sign_btn_mobile.addEventListener("click",()=>{
    modal__wrapper.classList.toggle('modal__active');
    modal__show.classList.toggle('modal__show');
    hidden.classList.toggle('hidden');
  });

  cross.addEventListener("click",()=>{
  modal__wrapper.classList.toggle('modal__active');
  modal__show.classList.toggle('modal__show');
  hidden.classList.toggle('hidden');
  });

  let lastMove = null;
  let start = 0;
  let step = 0; 
  let result = 0;
  let header__navs_act = "";

   hidden.addEventListener("touchstart", (event)=>{
    
      header__navs_act = document.querySelector('.header__navs-active');
      lastMove = event;
      start = lastMove.changedTouches[0].pageX;
  });

    hidden.addEventListener("touchmove", (event)=>{
      
      lastMove = event;
      step = lastMove.changedTouches[0].pageX;
      header__navs_act.style.transition = "right 1s ease-out 0.5s";
      header__navs_act.style.transform = "translateX("+-(start-step)+"px)";
  });

    hidden.addEventListener("touchend", (event)=>{
    
      result = start - step;
      if(-(result) < -400){

        CreateAndDelete();
        header__navs_act.style.transform = "none";
      } else{ 
        header__navs_act.style.transform = "none";
      }
      // console.log("result" + result);

    });
 }

