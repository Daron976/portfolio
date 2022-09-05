const menuButton = document.getElementById('menuButton');
const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuClose = document.getElementById('menuClose');

function openMenu() {
    header.style.display = "none";
    menu.style.display = "flex";
}

function closeMenu() {
    header.style.display = "flex";
    menu.style.display = "none";
}