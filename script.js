


const headerTitle = document.querySelector('#headerTitle');
const aboutContent = document.querySelector('#aboutArticle');
const aboutbtn = document.getElementById('aboutbtn');
const mainList = document.querySelector('#main-list'); 
const return_content = document.querySelector('#return');

aboutbtn.addEventListener('click', () => {
  aboutContent.classList.add('panelactive');
  mainList.style.visibility = 'hidden';
  return_content.style.visibility = 'visible';
});

const aboutList4_1 = document.querySelector('#about-listArea-list4 > li:first-child > .about-list');
const sectionRestaurant = document.querySelector('#about-section_restaurant');

aboutList4_1.addEventListener('click', () => {
  sectionRestaurant.style.display = 'block';
  aboutContent.classList.add('blurBg');
  headerTitle.classList.add('blurBg');
});

sectionRestaurant.addEventListener('click',() => {
  sectionRestaurant.style.display = 'none';
  aboutContent.classList.remove('blurBg');
  headerTitle.classList.remove('blurBg');
});

const aboutList4_2 = document.querySelector('#about-listArea-list4 > li:last-child > .about-list');
const sectionCompany = document.querySelector('#about-section_company');

aboutList4_2.addEventListener('click', () => {
  sectionCompany.style.display = 'block';
  aboutContent.classList.add('blurBg');
  headerTitle.classList.add('blurBg');
});

sectionCompany.addEventListener('click',() => {
  sectionCompany.style.display = 'none';
  aboutContent.classList.remove('blurBg');
  headerTitle.classList.remove('blurBg');
});





























































return_content.addEventListener('click', () => {
  aboutcontent.classList.remove('panelactive');
  mainList.style.visibility = 'visible';
  return_content.style.visibility = 'hidden';
})
