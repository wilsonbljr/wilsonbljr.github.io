// Open and close menu variables
var openButton = document.querySelector('#openMenu');
var closeButton = document.querySelector('#closeMenu');
var hamburgerMenu = document.querySelector('.hamburger');

//Navigation variables
var home = document.querySelector('#presentation');
var about = document.querySelector('#about');
var skills = document.querySelector('#skills');
var projects = document.querySelector('#projects');
var contact = document.querySelector('#contact');

//Listeners to open and close menu buttons
openButton.addEventListener('click', function () {openMenu()});
closeButton.addEventListener('click', function () {closeMenu()});

//Navigation buttons
document.querySelector('#item__inicio').addEventListener('click', function () {nav(home)})
document.querySelector('#item__sobre').addEventListener('click', function () {nav(about)});
document.querySelector('#item__skills').addEventListener('click', function () {nav(skills)});
document.querySelector('#item__projetos').addEventListener('click', function () {nav(projects)});
document.querySelector('#item__contato').addEventListener('click', function () {nav(contact)});

//Functions to open and close the menu
function openMenu() {
    closeButton.classList.remove("hamburger__hideButton");
    openButton.classList.add("hamburger__hideButton");
    hamburgerMenu.classList.add("hamburger__showMenu");
};

function closeMenu() {
    closeButton.classList.add("hamburger__hideButton");
    openButton.classList.remove("hamburger__hideButton");
    hamburgerMenu.classList.remove("hamburger__showMenu");
    hamburgerMenu.classList.add("hamburger__hideMenu");
};

//Function to navigate
function nav(where) {
    window.scrollTo({ top: where.offsetTop, behavior: 'smooth'});
    closeMenu();
};