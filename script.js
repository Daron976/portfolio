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
  subTitle: 'Multi-Post Stories',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  featuredImage: 'images/placeholder.png',
  featuredImageAltText: 'placeholder for pending images',
  technologiesItems: ['css', 'html', 'Bootstrap', 'Ruby'],
  buttonText: 'See Project',
};

const popUpContent = [
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

const workElement = document.querySelectorAll('.work_element');
const supportingTextHeader = document.querySelectorAll('.supporting_text > h3');
const workInfo = document.querySelectorAll('.work_info');
const workBtn = document.querySelectorAll('.supporting_text > button');

for (let i = 0; i < 4; i += 1) {
  const workImg = document.createElement('img');
  workImg.setAttribute('src', workSection.featuredImage);
  workImg.setAttribute('alt', workSection.featuredImageAltText);
  workImg.classList.add('card');
  workElement[i].appendChild(workImg);
  supportingTextHeader[i].textContent = workSection.subTitle;
  workInfo[i].textContent = workSection.description;
  workBtn[i].textContent = workSection.buttonText;
}

const projectOne = document.querySelectorAll('.projectOne > li');
const projectTwo = document.querySelectorAll('.projectTwo > li');
const projectThree = document.querySelectorAll('.projectThree > li');
const projectFour = document.querySelectorAll('.projectFour > li');
for (let i = 0; i < 4; i += 1) {
  projectOne[i].textContent = workSection.technologiesItems[i];
  projectTwo[i].textContent = workSection.technologiesItems[i];
  projectThree[i].textContent = workSection.technologiesItems[i];
  projectFour[i].textContent = workSection.technologiesItems[i];
}

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

function closePopUpWindow() {
  popUpDiv.style.display = 'none';
  header.style.display = 'flex';
  backGroundDiv.style.display = 'none';
}

workBtn[0].addEventListener('click', information);
workBtn[1].addEventListener('click', information);
workBtn[2].addEventListener('click', information);
workBtn[3].addEventListener('click', information);

popUpCancelBtn.addEventListener('click', closePopUpWindow);