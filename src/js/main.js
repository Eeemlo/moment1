"use strict"

window.onload = function () {

    const hamburgerEl = document.querySelector('.hamburger')
    const mobileNavEl = document.querySelector('.mobile_nav');

    hamburgerEl.addEventListener('click', function () {
        hamburgerEl.classList.toggle('active');
        mobileNavEl.classList.toggle('active');
    })
}