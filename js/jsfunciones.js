const menu =document.querySelector('.menu')

const ipad= window.matchMedia('screen and (max-width: 767px)');
const burgerButton = document.querySelector('#burger-menu');
const links= document.querySelector('#links');

if(ipad.matches){
  burgerButton.addEventListener('click',hideShow);
  links.addEventListener('click',hideShow);
}
ipad.addListener(validation);

console.log(links);

function validation(event){
  if(event.matches){
    burgerButton.addEventListener('click',hideShow);

  }else {
    burgerButton.removeEventListener('click',hideShow);
    links.removeEventListener('click',hideShow);
  }

}

function hideShow(){
  if (menu.classList.contains('is-active'))
  {
    menu.classList.remove('is-active');
  }
  else{
    menu.classList.add('is-active');
  }
}
