const ToggleBtn = document.querySelector('.header_ToggleBtn');
const menu = document.querySelector('.header_menu');
const icons = document.querySelector('.header_icons');

ToggleBtn.addEventListener('click',() =>{
    menu.classList.ToggleBtn('active');
    icons.classList.ToggleBtn('active');
});