


const headerTitle = document.querySelector('#headerTitle');
const aboutContent = document.querySelector('#aboutArticle');
const aboutbtn = document.getElementById('aboutbtn');
const mainList = document.querySelector('#main-list'); 
const return_content = document.querySelector('.return');
const h2Anime = document.querySelectorAll('.about-list > h2 > span');



aboutbtn.addEventListener('click', () => {
  aboutContent.style.visibility = 'visible';
  mainList.style.visibility = 'hidden';
  return_content.style.visibility = 'visible';
  
  const h2Anime = document.querySelectorAll('.about-list > h2 > span');
  for (let i = 0; i < h2Anime.length; i++ ) {
    h2Anime[i].classList.add('popup');
  }
});



const learnedContent = document.querySelector('#learnedArticle');
const learnedBtn = document.getElementById('learnedBtn');

learnedBtn.addEventListener('click', () => {
  learnedContent.style.visibility = 'visible';
  mainList.style.visibility = 'hidden';
  return_content.style.visibility = 'visible';
  console.log(return_content)
  const h2Anime = document.querySelectorAll('.learnedLayout-title > h2 > span');
  for (let i = 0; i < h2Anime.length; i++ ) {
    h2Anime[i].classList.add('popup');
  }
})



return_content.addEventListener('click', () => {
  aboutContent.style.visibility = 'hidden';
  learnedContent.style.visibility = 'hidden';
  mainList.style.visibility = 'visible';
  return_content.style.visibility = 'hidden';
});











//about-section-Restaurant
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



//about-section-hobby
const aboutList5 = document.querySelector('#about-listArea-list5 > .about-list');
const sectionHobby = document.querySelector('#about-section_hobby');

aboutList5.addEventListener('click', () => {
  sectionHobby.style.display = 'block';
  aboutContent.classList.add('blurBg');
  headerTitle.classList.add('blurBg');
});

sectionHobby.addEventListener('click',() => {
  sectionHobby.style.display = 'none';
  aboutContent.classList.remove('blurBg');
  headerTitle.classList.remove('blurBg');
});






//about-section-company-tableScroll
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




learnedDtailArea_active = function () {
  const btns = document.querySelectorAll('.learnedLayout-title > h2 > span');
  const targets = document.querySelectorAll('.learned-DetailArea > li');
  
  reset_style = function () {
    for (let j of targets) {
      j.style.opacity = '0';
    }
  }

  for (i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', function () {
      
      let btn = this.innerHTML;
      const Html = targets[0];
      const Css = targets[1];
      const JavaScript = targets[2];
      const illustraitor = targets[3];
      const photoshop = targets[4];
        switch (btn) {
          case 'HTML':
            reset_style();
            Html.style.opacity = '1';
            break;
          case 'CSS':
            reset_style();
            Css.style.opacity = '1';
            break;
          case 'JavaScript':
            reset_style();
            JavaScript.style.opacity = '1';
            break;
          case 'illustraitor':
            reset_style();
            illustraitor.style.opacity = '1';
            break;
          case 'photoshop':
            reset_style();
            photoshop.style.opacity = '1';
            break;
        }
    });
  }
}
  
window.addEventListener('load', function () {
  learnedDtailArea_active();
  mousedragscrollable('#companyContent');
})






















































