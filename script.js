const header = document.getElementById('header');
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');
const cancelButton = document.getElementById('cancelButton');
const mobileLinks = document.getElementsByClassName('mobile_links');

function openMenu() {
  header.style.display = 'none';
  menu.style.display = 'flex';
}

function closeMenu() {
  header.style.display = 'flex';
  menu.style.display = 'none';
}

menuButton.setAttribute('onclick', 'openMenu()');
cancelButton.setAttribute('onclick', 'closeMenu()');

for (let i = 0; i < 3; i += 1) {
  mobileLinks[i].setAttribute('onclick', 'closeMenu()');
}

const popUpContent =
  {
    name: 'Multi-post story',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    featuredImageDesktop: 'images/Snapshoot-Portfolio.png',
    technologiesItems: ['html','Ruby on rails', 'css', 'Github'],
    liveProject: 'https://daron976.github.io/portfolio/',
    projectSource: 'https://github.com/Daron976/portfolio'
  }


// this is the pop up window

const body = document.querySelector('body');
const popUpDiv = document.createElement('div');
popUpDiv.classList.add('popUpWindow');
const containerDiv = document.createElement('div');
containerDiv.classList.add('popUpContainer');
const headerAndCancelButton = document.createElement('div');
headerAndCancelButton.classList.add('headerWithCancel');
const h2 = document.createElement('h2');
h2.setAttribute('id', 'popUpHeader');
h2.textContent = popUpContent.name;
const popUpCancelBtn = document.createElement('button');
popUpCancelBtn.setAttribute('type', 'button')
const popUpCancel = document.createElement('img');
popUpCancelBtn.classList.add('mobile_menu_btn')
popUpCancel.setAttribute('src', 'images/Icon.png');
popUpCancel.setAttribute('alt', 'cancel button');
popUpCancelBtn.appendChild(popUpCancel);
headerAndCancelButton.appendChild(popUpCancelBtn);
headerAndCancelButton.appendChild(h2);
containerDiv.appendChild(headerAndCancelButton);
const popUpImage = document.createElement('img');
popUpImage.classList.add('popUpImage');
popUpImage.setAttribute('src', 'images/Snapshoot-Portfolio.png');
popUpImage.setAttribute('alt', 'Project display');
containerDiv.appendChild(popUpImage);
const popUpInfo = document.createElement('div');
popUpInfo.classList.add('popUpInfo');
const paraDesktop = document.createElement('p');
paraDesktop.classList.add('popUpDescription');
paraDesktop.textContent = popUpContent.descriptionDesktop;
popUpInfo.appendChild(paraDesktop);
const paraMobile = document.createElement('p');
paraMobile.classList.add('popUpDescriptionMobile');
paraMobile.textContent = popUpContent.descriptionMobile;
popUpInfo.appendChild(paraMobile);
const uList = document.createElement('ul')
uList.classList.add('technologies');
for (let i = 0; i < popUpContent.technologiesItems.length; i++) {
  let uListItems = document.createElement('li');
  uListItems.classList.add('technologiesList');
  uListItems.textContent = popUpContent.technologiesItems[i];
  uList.appendChild(uListItems);
}
uList.firstChild.classList.add('leftBorder');
uList.lastChild.classList.add('displayNone');
popUpInfo.appendChild(uList);
const desktopPopUpBtn = document.createElement('div')
desktopPopUpBtn.classList.add('desktopPopUpBtn');
const liveAnchor = document.createElement('a');
liveAnchor.setAttribute('href', popUpContent.liveProject);
const liveProjectBtn = document.createElement('button');
liveProjectBtn.classList.add('btn', 'liveProject');
liveProjectBtn.setAttribute('type', 'button');
liveProjectBtn.textContent = 'See live ';
const liveIcon = document.createElement('i');
liveIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square')
liveProjectBtn.appendChild(liveIcon);
liveAnchor.appendChild(liveProjectBtn);
desktopPopUpBtn.appendChild(liveAnchor);
const sourceAnchor = document.createElement('a');
sourceAnchor.setAttribute('href', popUpContent.projectSource);
const projectSourceBtn = document.createElement('button');
projectSourceBtn.classList.add('btn', 'projectSource');
projectSourceBtn.setAttribute('type', 'button');
projectSourceBtn.textContent = 'See Source ';
const sourceIcon = document.createElement('i');
sourceIcon.classList.add('fa-brands', 'fa-github')
projectSourceBtn.appendChild(sourceIcon);
sourceAnchor.appendChild(projectSourceBtn);
desktopPopUpBtn.appendChild(sourceAnchor);
popUpInfo.appendChild(desktopPopUpBtn);
containerDiv.appendChild(popUpInfo);
popUpDiv.appendChild(containerDiv);
const backGroundDiv = document.createElement('div');
backGroundDiv.setAttribute('class', 'backGroundColor')
popUpDiv.appendChild(backGroundDiv);
body.appendChild(popUpDiv);


function openPopUpWindow() {
  backGroundDiv.style.display = 'block'
  popUpDiv.style.display = 'flex';
  header.style.display = 'none';
}

function closePopUpWindow() {
  popUpDiv.style.display = 'none';
  header.style.display = 'flex';
  backGroundDiv.style.display = 'none';
}

const openPopUpWindowBtn = document.getElementsByClassName('openPopUp');

for (let i = 0; i < 4; i++) {
  openPopUpWindowBtn[i].addEventListener('click', openPopUpWindow)
}

popUpCancelBtn.addEventListener('click', closePopUpWindow);