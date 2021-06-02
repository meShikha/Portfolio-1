burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-res');
    navlist.classList.toggle('v-class-res');
})