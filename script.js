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

const popUpContent = [
  {
    name: 'Multi-post story',
    descriptionMobile: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    featuredImageDesktop: 'images/Snapshoot-Portfolio.png',
    technologiesItems: ['html', 'Ruby on rails', 'css', 'Github'],
    liveProject: 'https://daron976.github.io/portfolio/',
    projectSource: 'https://github.com/Daron976/portfolio',
  },
  {
    mobileTitle: 'MY RECENT WORK',
    desktopTitle: 'My recent work',
    subTitle: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    featuredImage: 'images/placeholder.png',
    featuredImageAltText: 'placeholder for pending images',
    technologiesItems: ['css', 'html', 'Bootstrap', 'Ruby'],
    buttonText: 'See Project',
  },
];

const mobileWorkHeader = document.querySelectorAll('.mobile_work_header');
mobileWorkHeader.textContent = popUpContent[1].mobileTitle;
const desktopWorkHeader = document.querySelectorAll('.desktop_work_header');
desktopWorkHeader.textContent = popUpContent[1].desktopTitle;

const workElement = document.querySelectorAll('.work_element');
const supportingTextHeader = document.querySelectorAll('.supporting_text > h3');
const workInfo = document.querySelectorAll('.work_info');
const workBtn = document.querySelectorAll('.supporting_text > button');

for (let i = 0; i < 4; i += 1) {
  const workImg = document.createElement('img');
  workImg.setAttribute('src', popUpContent[1].featuredImage);
  workImg.setAttribute('alt', popUpContent[1].featuredImageAltText);
  workImg.classList.add('card');
  workElement[i].appendChild(workImg);
  supportingTextHeader[i].textContent = popUpContent[1].subTitle;
  workInfo[i].textContent = popUpContent[1].description;
  workBtn[i].textContent = popUpContent[1].buttonText;
}

const projectOne = document.querySelectorAll('.projectOne > li');
const projectTwo = document.querySelectorAll('.projectTwo > li');
const projectThree = document.querySelectorAll('.projectThree > li');
const projectFour = document.querySelectorAll('.projectFour > li');
for (let i = 0; i < 4; i += 1) {
  projectOne[i].textContent = popUpContent[1].technologiesItems[i];
  projectTwo[i].textContent = popUpContent[1].technologiesItems[i];
  projectThree[i].textContent = popUpContent[1].technologiesItems[i];
  projectFour[i].textContent = popUpContent[1].technologiesItems[i];
}

const body = document.querySelector('body');
const popUpDiv = document.createElement('div');
popUpDiv.classList.add('popUpWindow');
const containerDiv = document.createElement('div');
containerDiv.classList.add('popUpContainer');
const headerAndCancelButton = document.createElement('div');
headerAndCancelButton.classList.add('headerWithCancel');
const h2 = document.createElement('h2');
h2.setAttribute('id', 'popUpHeader');
h2.textContent = popUpContent[0].name;
const popUpCancelBtn = document.createElement('button');
popUpCancelBtn.setAttribute('type', 'button');
const popUpCancel = document.createElement('img');
popUpCancelBtn.classList.add('mobile_menu_btn');
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
paraDesktop.textContent = popUpContent[0].descriptionDesktop;
popUpInfo.appendChild(paraDesktop);
const paraMobile = document.createElement('p');
paraMobile.classList.add('popUpDescriptionMobile');
paraMobile.textContent = popUpContent[0].descriptionMobile;
popUpInfo.appendChild(paraMobile);
const uList = document.createElement('ul');
uList.classList.add('technologies');
for (let i = 0; i < popUpContent[0].technologiesItems.length; i += 1) {
  const uListItems = document.createElement('li');
  uListItems.classList.add('technologiesList');
  uListItems.textContent = popUpContent[0].technologiesItems[i];
  uList.appendChild(uListItems);
}
uList.firstChild.classList.add('leftBorder');
uList.lastChild.classList.add('displayNone');
popUpInfo.appendChild(uList);
const desktopPopUpBtn = document.createElement('div');
desktopPopUpBtn.classList.add('desktopPopUpBtn');
const liveAnchor = document.createElement('a');
liveAnchor.setAttribute('href', popUpContent[0].liveProject);
const liveProjectBtn = document.createElement('button');
liveProjectBtn.classList.add('btn', 'liveProject');
liveProjectBtn.setAttribute('type', 'button');
liveProjectBtn.textContent = 'See live ';
const liveIcon = document.createElement('i');
liveIcon.classList.add('fa-solid', 'fa-arrow-up-right-from-square');
liveProjectBtn.appendChild(liveIcon);
liveAnchor.appendChild(liveProjectBtn);
desktopPopUpBtn.appendChild(liveAnchor);
const sourceAnchor = document.createElement('a');
sourceAnchor.setAttribute('href', popUpContent[0].projectSource);
const projectSourceBtn = document.createElement('button');
projectSourceBtn.classList.add('btn', 'projectSource');
projectSourceBtn.setAttribute('type', 'button');
projectSourceBtn.textContent = 'See Source ';
const sourceIcon = document.createElement('i');
sourceIcon.classList.add('fa-brands', 'fa-github');
projectSourceBtn.appendChild(sourceIcon);
sourceAnchor.appendChild(projectSourceBtn);
desktopPopUpBtn.appendChild(sourceAnchor);
popUpInfo.appendChild(desktopPopUpBtn);
containerDiv.appendChild(popUpInfo);
popUpDiv.appendChild(containerDiv);
const backGroundDiv = document.createElement('div');
backGroundDiv.setAttribute('class', 'backGroundColor');
popUpDiv.appendChild(backGroundDiv);
body.appendChild(popUpDiv);

function openPopUpWindow() {
  backGroundDiv.style.display = 'block';
  popUpDiv.style.display = 'flex';
  header.style.display = 'none';
}

function closePopUpWindow() {
  popUpDiv.style.display = 'none';
  header.style.display = 'flex';
  backGroundDiv.style.display = 'none';
}

const openPopUpWindowBtn = document.getElementsByClassName('openPopUp');

for (let i = 0; i < 4; i += 1) {
  openPopUpWindowBtn[i].addEventListener('click', openPopUpWindow);
}

popUpCancelBtn.addEventListener('click', closePopUpWindow);