const menuBtn = document.querySelector('.burger__btn');
const menuClose = document.querySelector('.mobile-close__btn');
const menuList = document.querySelector('.menu');
const menuHover = document.querySelector('.dark--hover');


menuBtn.addEventListener('click', () => {
   menuList.classList.remove('btn--hasnt--tuched');
   menuList.classList.toggle('menu--open');
   menuList.classList.remove('on--close');
   menuHover.classList.toggle('dark--hover--vision');
});

menuClose.addEventListener('click', () => {
   menuList.classList.remove('menu--open');
   menuList.classList.toggle('on--close');
   menuHover.classList.remove('dark--hover--vision');

});
menuHover.addEventListener('click', () => {
   menuList.classList.remove('menu--open');
   menuList.classList.toggle('on--close');
   menuHover.classList.remove('dark--hover--vision');

});

