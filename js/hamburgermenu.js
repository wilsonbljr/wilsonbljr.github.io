// Open and close menu variables
let openButton = document.querySelector('#openMenu');
let closeButton = document.querySelector('#closeMenu');
let hamburgerMenu = document.querySelector('.hamburger');

//Navigation variables
let home = document.querySelector('#presentation');
let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let projects = document.querySelector('#projects');
let contact = document.querySelector('#contact');
let scrollDown = document.querySelector('.presentation__scrollDown')

//Listeners to open and close menu buttons
openButton.addEventListener('click', function () {openMenu()});
closeButton.addEventListener('click', function () {closeMenu()});

//Navigation buttons
document.querySelector('#item__inicio').addEventListener('click', function () {nav(home)})
document.querySelector('#item__sobre').addEventListener('click', function () {nav(about)});
document.querySelector('#item__skills').addEventListener('click', function () {nav(skills)});
document.querySelector('#item__projetos').addEventListener('click', function () {nav(projects)});
document.querySelector('#item__contato').addEventListener('click', function () {nav(contact)});
scrollDown.addEventListener('click', function () {nav(about)});
window.addEventListener('scroll', function () {hideScrollDown()});

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

//Function to hide scrollDown ("Saiba mais")
function hideScrollDown () {
    let y = window.scrollY;
    if (y > 0) {
        scrollDown.classList.add("scrollDown__hide");
        console.log(y);
    } else {
        scrollDown.classList.remove("scrollDown__hide");
    };
}