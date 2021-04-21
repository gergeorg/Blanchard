document.addEventListener('DOMContentLoaded', () => {
    // gallary slider

  const gallarySlider = document.querySelector('.gallery__swiper-container');

  var gallarySwiper = new Swiper(gallarySlider, {
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    // updateOnWindowResize: true,
    slidersPerColumnFill: 'row',
    breakpoints:{
      667:{
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },

      1024:{
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        },

      1330:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
      }
    }
  });

  // events slider

  const eventsSlider = document.querySelector('.events__slider-container');

  let swiperEvent;

  const mobileSlider = () => {
  // function mobileSlider() {
    if (window.innerWidth <= 767 && eventsSlider.dataset.mobile == 'false') {
      swiperEvent = new Swiper(eventsSlider, {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        loop: true,
        slideClass: ('events__item'),

        pagination: {
          el: '.swiper-pagination',
        },
      });

      eventsSlider.dataset.mobile = 'true';
    }

    if (window.innerWidth > 767) {
      eventsSlider.dataset.mobile = 'false';

        if (eventsSlider.classList.contains('swiper-container-initialized')) {
          swiperEvent.destroy();
        }
    }
  }

  mobileSlider();

  window.addEventListener('resize', () => {
    mobileSlider();
  });

  // publication slider

  const publicationSlider = document.querySelector('.publication__swiper-container');

  var publicationSwiper = new Swiper(publicationSlider, {
    slideClass: ('publication__slide'),
    slidesPerView: 2,
    // slidesPerGroup: 1,
    // updateOnWindowResize: true,
    spaceBetween: 35,
    pagination: {
      el: '.publication__swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.publication__swiper-button-next',
      prevEl: '.publication__swiper-button-prev',
    },

    breakpoints:{
      970:{
        spaceBetween: 50,
      },

      1500:{
        slidesPerView: 3,
      }
    }
  })

  // partners swiper

  const partnersSlider = document.querySelector('.partners__swiper-container');

  var partnersSwiper = new Swiper(partnersSlider, {
    loop: true,
    slideClass: ('partners__swiper-slide'),
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })

})
