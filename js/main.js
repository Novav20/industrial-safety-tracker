const hamburgerBtn = document.querySelector('#hamburger-btn');

const navMenu = document.querySelector('nav');

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-open');
});