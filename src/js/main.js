window.onload = function(){

const menuLink = document.querySelector('.menu-link'),
      headerNavs = document.querySelector('.header__navs'),
      hidden = document.querySelector('body'),
      authSignBtn = document.querySelector('.auth__sign-btn'),
      authSignBtnMobile = document.querySelector('.auth__sign-btn-mobile'),
      modalWrapper = document.querySelector('.modal__wrapper'),
      cross = document.querySelector('.modal__close'),
      modalShow = document.querySelector('.modal');

  function CreateAndDelete(){

    menuLink.classList.toggle('menu-link__active');
    headerNavs.classList.toggle('header__navs-active');
    hidden.classList.toggle('hidden');
  }
  function ModalShow(){

    modalWrapper.classList.toggle('modal__active');
    modalShow.classList.toggle('modal__show');
    hidden.classList.toggle('hidden');
    const body = document.querySelector('body');
  }
  function ModalActive(){

    modalWrapper.classList.toggle('modal__active');
    modalShow.classList.toggle('modal__show');
    hidden.classList.toggle('hidden');
  }
  function Close(){
    modalWrapper.classList.toggle('modal__active');
    modalShow.classList.toggle('modal__show');
    hidden.classList.toggle('hidden');
  }
  function TouctStartMobile(event){

      headerNavsAct = document.querySelector('.header__navs-active');
      lastMove = event;
      start = lastMove.changedTouches[0].pageX;
  }
  function TouchMoveMobile(event){
    lastMove = event;
    step = lastMove.changedTouches[0].pageX;
    headerNavsAct.style.transition = "right 1s ease-out 0.5s";
    headerNavsAct.style.transform = "translateX("+-(start-step)+"px)";
  }
  function TouchEndMibile(event){

     result = start - step;
      if(-(result) < -400){

        CreateAndDelete();
        headerNavsAct.style.transform = "none";
      } else{ 
        headerNavsAct.style.transform = "none";
      }

  }

  menuLink.addEventListener("click", CreateAndDelete);
  authSignBtn.addEventListener("click", ModalShow);
  authSignBtnMobile.addEventListener("click", ModalActive);
  cross.addEventListener("click", Close);

  let lastMove = null,
      start = 0,
      step = 0,
      result = 0,
      headerNavsAct = "";

   hidden.addEventListener("touchstart", TouctStartMobile);
   hidden.addEventListener("touchmove", TouchMoveMobile);
   hidden.addEventListener("touchend", TouchEndMibile);


let map = L.map('mapid').setView([55.182373, 30.200888], 8);

L.tileLayer('http://vec{s}.maps.yandex.net/tiles?l=map&v=4.55.2&z={z}&x={x}&y={y}&scale=2&lang=ru_RU', {
    subdomains: ['01', '02', '03', '04'],
    attribution: '<a http="yandex.ru" target="_blank">Яндекс</a>',
    reuseTiles: true,
    updateWhenIdle: false
  }
).addTo(map);


let greenIcon = L.icon({
    
    iconUrl: 'img/marker-icon.svg',
    iconSize:     [28, 85], 
    iconAnchor:   [22, 94],
    popupAnchor:  [-3, -76]
});


let marker = L.marker([55.182373, 30.200888], {icon: greenIcon}).addTo(map);
marker.bindPopup("<p>ул. Белобородова</p>").addTo(map);


  const contacts =  document.querySelector('.contact');
  const contactsWrapper = document.querySelector('.contacts__wrapper');
  const contactsClose = document.querySelector('.contacts__close');
  const contactsModal = document.querySelector('.contacts__modal');


  contacts.addEventListener("click", ContactsClick);
  contactsClose.addEventListener("click", ContactsClose);

  function ContactsClick(){

    contactsWrapper.classList.toggle('contacts__active');
    contactsModal.classList.toggle('contacts__show');
    hidden.classList.add('hidden');
  }

  function ContactsClose(){
    contactsWrapper.classList.toggle('contacts__active');
    contactsModal.classList.toggle('contacts__show');
    hidden.classList.toggle('hidden');
  }

}




