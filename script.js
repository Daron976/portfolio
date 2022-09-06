const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');
const cancelButton = document.getElementById('cancelButton');
const mobileLinks = document.getElementsByClassName('mobile_links');
const onClickOpen = document.createAttribute('onclick');
const onClickClose = document.createAttribute('onclick');

function openMenu() {
  header.style.display = 'none';
  menu.style.display = 'flex';
}

function closeMenu() {
  header.style.display = 'flex';
  menu.style.display = 'none';
}

onClickOpen.value = openMenu();
onClickClose.value = closeMenu();

menuButton.setAttribute('onclick', 'openMenu()');
cancelButton.setAttribute('onclick', 'closeMenu()');

for (let i = 0; i < 3; i += 1) {
  mobileLinks[i].setAttribute('onclick', 'closeMenu()');
}