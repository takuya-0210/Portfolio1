


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

return_content.addEventListener('click', () => {
  aboutContent.classList.remove('panelactive');
  mainList.style.visibility = 'visible';
  return_content.style.visibility = 'hidden';
});



//about-section-Reataurant
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




//about-section-company
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











//about-section-company
function mousedragscrollable (element) {
  let target;
  const elms = document.querySelectorAll(element);
  for (let i = 0; i < elms.length; i++) {
    elms[i].addEventListener('mousedown', function (evt) {
      evt.preventDefault();
      target = elms[i];
      target.dataset.down = 'true';
      target.dataset.move = 'false';
      target.dataset.x = evt.clientX;
      target.dataset.y = evt.clientY;
      target.dataset.scrollleft = target.scrollLeft;
      target.dataset.scrolltop = target.scrollTop;
      evt.stopPropagation();
    });
    elms[i].addEventListener('click', function (evt) {
      if (elms[i].dataset != null && elms[i].dataset.move == 'true') evt.stopPropagation();
    });
  }

  document.addEventListener('mousemove', function(evt) {
    if (target != null && target.dataset.down == 'true') {
      evt.preventDefault();
      let move_x = parseInt(target.dataset.x) - evt.clientX;
      let move_y = parseInt(target.dataset.y) - evt.clientY;
      if ( move_x !== 0 || move_y !== 0) {
        target.dataset.move = 'true';
      } else {
        return;
      }
      target.scrollLeft = parseInt(target.dataset.scrollleft) + move_x;
      target.scrollTop = parseInt(target.dataset.scrolltop) + move_y;
    }
  });

  document.addEventListener('mouseup', function (evt) {
    if (target != null && target.dataset.down == 'true') {
      target.dataset.down = 'false';
      evt.stopPropagation();
    }
  });
}

window.addEventListener('DOMContentLoaded', function () {
  mousedragscrollable('#companyContent');
});
























































return_content.addEventListener('click', () => {
  aboutcontent.classList.remove('panelactive');
  mainList.style.visibility = 'visible';
  return_content.style.visibility = 'hidden';
})
