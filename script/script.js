window.addEventListener("DOMContentLoaded", () => {

  document.querySelector('.timeDate').textContent = new Date().getFullYear();

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 10,
      speed: 1500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        860: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
        1300: {
          slidesPerView: 10,
          spaceBetween: 70,
        },
      }
    })
    const swiper_3 = new Swiper('.swiper_clients', {
      direction: 'horizontal',
      // loop: true,
      slidesPerView: 10,
      speed: 1500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        720: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        860: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
        1000: {
          slidesPerView: 7,
          spaceBetween: 60,
        },
        1300: {
          slidesPerView: 10,
          spaceBetween: 70,
        },
      }
    })

    const swiper_2 = new Swiper('.swiperMain', {
        loop: true,
        scrollbar: false,
        speed: 1500,
        pagination: {
          el: '.swiper_pagination',
        },
        navigation: {
          nextEl: '.swiper_button_next',
          prevEl: '.swiper_button_prev',
        },
    })

  setInterval(() => {
    if(window.pageYOffset > 800){
        document.querySelector('.sci').classList.add('activeSci');
    } else {
      document.querySelector('.sci').classList.remove('activeSci');
    }
    if(window.pageYOffset > 200){
      document.querySelector('.arrowScrolling').classList.add('scroller');
    } else {
      document.querySelector('.arrowScrolling').classList.remove('scroller');
    }
    
  }, 200)
  

  async function databaseSlider(){
    let api = '/json/slider_db.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      console.log(el);
      document.querySelector('.mainSliderServices').innerHTML += `
          <div class="swiper-slide mainSlide width_content">
              <video src="./video/services/${el.url}" autoplay loop muted></video>
              <div class="content_slider_check">
                <h1>${el.title}</h1>
                <p>${el.descr}</p>
                <p class="priceServices">${el.price}</p>
              </div>
          </div>
      `;
    })
  }

  async function databaseSlider_2(){
    let api = '/json/slider_db_2.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.slider_technology').innerHTML += `
          <div class="swiper-slide slideTechnology">
            <img src="./img/technology/${el.url}">
          </div>
      `;
    })
  }

  async function databaseSlider_3(){
    let api = '/json/slider_db_3.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.swiper_clients_wrapper').innerHTML += `
          <div class="swiper-slide slide_client">
            <img src="./img/clients/${el.url}">
          </div>
      `;
    })
  }

  async function cards(){
    let api = '/json/cards.json';
    const loadData = await fetch(api);
    const readData = await loadData.json();

    readData.data.map(el => {
      document.querySelector('.cards_products').innerHTML += `
          <div class="cardProject">
            <h3 class="title">${el.title}</h3>
            <div class="card_job">
                <p>${el.type} </p>
            </div>
            <a href="#" class="moreInfo" onclick="return modalSettingSite();">
                ПОДРОБНЕЕ
            </a>
            <img src="./img/cards/${el.image}">
          </div>
      `;
    })
  }

  setTimeout(() => {
      databaseSlider();
      databaseSlider_2();
      databaseSlider_3();
      cards();
  }, 200)
})

function menuToggle(){
  const toggle = document.querySelector(".toggle");
  const section = document.querySelector(".header_section");
  toggle.classList.toggle("active");
  section.classList.toggle("active");
}

function modalSettingSite(){

  document.querySelector('.messageTechEnginering').classList.toggle('active');

  return false;
}

function scrollingToCheckHeight(){
  if(window.pageYOffset > 200){
    window.scrollTo(0, 0)
  } else {
    window.scrollTo(0, 900)
  }
}
