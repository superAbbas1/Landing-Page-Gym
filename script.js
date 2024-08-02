document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
        navToggle.classList.toggle('open');
    });

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 0);
    });
});
