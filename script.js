const header = document.getElementById('header');
const menu = document.getElementById('menu');

function openMenu() {
  header.style.display = 'none';
  menu.style.display = 'flex';
}

function closeMenu() {
  header.style.display = 'flex';
  menu.style.display = 'none';
}
