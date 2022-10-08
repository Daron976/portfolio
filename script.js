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

const workSection = {
  mobileTitle: 'MY RECENT WORK',
  desktopTitle: 'My recent work',
};

const popUpContent = [
  {
    name: 'To Do List Application',
    descriptionMobile: 'In this project, I build a to do list minimalist websites that allows users to create and modify a to do list.',
    descriptionDesktop: 'In this project, I build a to do list minimalist websites that allows users to create and modify a to do list.',
    featuredImage: 'images/to-do-list-project.png',
    technologiesItems: ['HTML', 'JavaScript', 'CSS', 'Webpack'],
    liveProject: 'https://daron976.github.io/To-Do-List/dist/',
    projectSource: 'https://github.com/Daron976/To-Do-List',
  },
  {
    name: 'Multi-post story project',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologiesItems: ['html', 'Ruby on rails', 'css', 'Github'],
    liveProject: 'https://daron976.github.io/portfolio/',
    projectSource: 'https://github.com/Daron976/portfolio',
  },
  {
    name: 'Multi-post story project',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologiesItems: ['html', 'Ruby on rails', 'css', 'Github'],
    liveProject: 'https://daron976.github.io/portfolio/',
    projectSource: 'https://github.com/Daron976/portfolio',
  },
  {
    name: 'Multi-post story project',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    featuredImage: 'images/Snapshoot-Portfolio.png',
    technologiesItems: ['html', 'Ruby on rails', 'css', 'Github'],
    liveProject: 'https://daron976.github.io/portfolio/',
    projectSource: 'https://github.com/Daron976/portfolio',
  },
];

const mobileWorkHeader = document.querySelectorAll('.mobile_work_header');
mobileWorkHeader.textContent = workSection.mobileTitle;
const desktopWorkHeader = document.querySelectorAll('.desktop_work_header');
desktopWorkHeader.textContent = workSection.desktopTitle;

const Btn = document.querySelector('#to-do-btn');

const body = document.querySelector('body');
const popUpDiv = document.createElement('div');
const containerDiv = document.createElement('div');
const headerAndCancelButton = document.createElement('div');
const h2 = document.createElement('h2');
const popUpCancelBtn = document.createElement('button');
const popUpCancel = document.createElement('img');
const popUpImage = document.createElement('img');
const popUpInfo = document.createElement('div');
const paraDesktop = document.createElement('p');
const paraMobile = document.createElement('p');
const uList = document.createElement('ul');
const desktopPopUpBtn = document.createElement('div');
const liveAnchor = document.createElement('a');
const liveProjectBtn = document.createElement('button');
const liveIcon = document.createElement('i');
const sourceAnchor = document.createElement('a');
const projectSourceBtn = document.createElement('button');
const sourceIcon = document.createElement('i');
const backGroundDiv = document.createElement('div');

popUpDiv.classList.add('popUpWindow');
containerDiv.classList.add('popUpContainer');
headerAndCancelButton.classList.add('headerWithCancel');
h2.setAttribute('id', 'popUpHeader');
popUpCancelBtn.setAttribute('type', 'reset');
popUpCancelBtn.classList.add('mobile_menu_btn');
popUpCancel.setAttribute('src', 'images/Icon.png');
popUpCancel.setAttribute('alt', 'cancel button');
popUpCancelBtn.appendChild(popUpCancel);
headerAndCancelButton.appendChild(popUpCancelBtn);
headerAndCancelButton.appendChild(h2);
containerDiv.appendChild(headerAndCancelButton);
popUpImage.classList.add('popUpImage');
popUpImage.setAttribute('alt', 'Project display');
containerDiv.appendChild(popUpImage);
popUpInfo.classList.add('popUpInfo');
paraDesktop.classList.add('popUpDescription');
popUpInfo.appendChild(paraDesktop);
paraMobile.classList.add('popUpDescriptionMobile');
popUpInfo.appendChild(paraMobile);
popUpInfo.appendChild(uList);
desktopPopUpBtn.classList.add('desktopPopUpBtn');
liveProjectBtn.classList.add('btn', 'liveProject');
liveProjectBtn.setAttribute('type', 'button');
liveProjectBtn.textContent = 'See live ';
liveIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
liveProjectBtn.appendChild(liveIcon);
liveAnchor.appendChild(liveProjectBtn);
desktopPopUpBtn.appendChild(liveAnchor);
projectSourceBtn.classList.add('btn', 'projectSource');
projectSourceBtn.setAttribute('type', 'button');
projectSourceBtn.textContent = 'See Source ';
sourceIcon.classList.add('fa-brands', 'fa-github');
projectSourceBtn.appendChild(sourceIcon);
sourceAnchor.appendChild(projectSourceBtn);
desktopPopUpBtn.appendChild(sourceAnchor);
popUpInfo.appendChild(desktopPopUpBtn);
containerDiv.appendChild(popUpInfo);
popUpDiv.appendChild(containerDiv);
backGroundDiv.setAttribute('class', 'backGroundColor');
popUpDiv.appendChild(backGroundDiv);
body.appendChild(popUpDiv);

function openPopUpWindow() {
  backGroundDiv.style.display = 'block';
  popUpDiv.style.display = 'flex';
  header.style.display = 'none';
}

function information(e) {
  h2.textContent = popUpContent[e.target.getAttribute('value')].name;
  popUpImage.setAttribute('src', popUpContent[e.target.getAttribute('value')].featuredImage);
  paraDesktop.textContent = popUpContent[e.target.getAttribute('value')].descriptionDesktop;
  paraMobile.textContent = popUpContent[e.target.getAttribute('value')].descriptionMobile;
  liveAnchor.setAttribute('href', popUpContent[e.target.getAttribute('value')].liveProject);
  sourceAnchor.setAttribute('href', popUpContent[e.target.getAttribute('value')].projectSource);

  while (uList.firstChild) {
    uList.removeChild(uList.firstChild);
  }

  for (let i = 0; i < 4; i += 1) {
    const uListItems = document.createElement('li');
    uListItems.classList.add('technologiesList');
    uListItems.textContent = popUpContent[e.target.getAttribute('value')].technologiesItems[i];
    uList.appendChild(uListItems);
  }
  uList.classList.add('technologies');
  uList.firstChild.classList.add('leftBorder');
  uList.lastChild.classList.add('displayNone');

  openPopUpWindow();
}

Btn.addEventListener('click', information);

function closePopUpWindow() {
  popUpDiv.style.display = 'none';
  header.style.display = 'flex';
  backGroundDiv.style.display = 'none';
}

popUpCancelBtn.addEventListener('click', closePopUpWindow);

const form = document.getElementById('form_submission');
const email = document.getElementById('email');
const errorText = document.getElementById('error');

form.addEventListener('submit', (e) => {
  if (email.value !== String(email.value).toLowerCase()) {
    errorText.style.display = 'flex';
    e.preventDefault();
  }
});

// js Storage

const formName = document.getElementById('name');
const formText = document.getElementById('customer_information');

function autoFill() {
  const storageObj = {
    name: localStorage.setItem('customerName', formName.value),
    email: localStorage.setItem('customerEmail', email.value),
    customerInfo: localStorage.setItem('customerInfo', formText.value),
  };
  return storageObj;
}

formName.value = localStorage.getItem('customerName');
email.value = localStorage.getItem('customerEmail');
formText.value = localStorage.getItem('customerInfo');

autoFill();

formName.onchange = autoFill;
email.onchange = autoFill;
formText.onchange = autoFill;