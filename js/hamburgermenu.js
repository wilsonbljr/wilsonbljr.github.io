var openButton = document.querySelector('#openMenu');
var closeButton = document.querySelector('#closeMenu');
var hamburgerMenu = document.querySelector('.hamburger');

openButton.addEventListener('click', function () {
    closeButton.classList.remove("hamburger__hideButton");
    openButton.classList.add("hamburger__hideButton");
    hamburgerMenu.classList.add("hamburger__showMenu");
})

closeButton.addEventListener('click', function() {
    closeButton.classList.add("hamburger__hideButton");
    openButton.classList.remove("hamburger__hideButton");
    hamburgerMenu.classList.remove("hamburger__showMenu");
    hamburgerMenu.classList.add("hamburger__hideMenu");
})