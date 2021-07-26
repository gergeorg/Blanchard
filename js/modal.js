document.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const modal = document.querySelector('.overlay')
  const modalClose = document.querySelector('.modal__close')
  const gallerswiperButton = document.querySelectorAll('.gallery__swiper-button')
  const modalContent = document.querySelector('.modal__content')


  let dataLength = null


  const loadPicture = () => {
    fetch('db/db_modal.json') //отправляем запрос к json файлу
      .then((response) => {
        return response.json(); //преобразование json  в js
      })
      .then((data) => {
        console.log(data);

        dataLength = data.length;
        modalContent.innerHTML = ''

        for (let i = 0; i < dataLength; i++) {
          let item = data[i]
          console.log(item);

          modalContent.innerHTML += `
            <div class="modal__image">
              <img class="modal__image-picture" src="${item.picturePath}" alt="${item.pictureName}">
            </div>

            <div class="modal__descr">
                <h3 class="modal__painter-name">${item.painterName}</h3>
                <p class="modal__picture-name">“${item.pictureName}”</p>
                <span class="modal__painter-years">${item.painterYears}</span>

                <p class="modal__picture-descr">${item.pictureDescr}</p>
              </div>
          `
        }
      })
    }

    loadPicture()
  })

  // const modalData = [
  //   {
  //     "id": "picture-1",
  //     "painterName": "Карл Брюллов",
  //     "picturePath": "../img/gallery_slider/gallery_slide_1.jpg",
  //     "pictureName": "Итальянский полдень",
  //     "painterYears": "1799 - 1852",
  //     "pictureDescr": "Парная к «Полдню» картина «Итальянское утро» написана в 1823 году и была подарена Обществом поощрения художников Александре Фёдоровне, жене Николая I. Император захотел получить парную к «Утру» картину, что послужило началом написания Брюлловым картины «Итальянский полдень»."
  //   },

  //   {
  //   "id": "picture-2",
  //   "painterName": "Ян ван Хёйсум",
  //   "picturePath": "../img/gallery_slider/gallery_slide_2.jpg",
  //   "pictureName": "Цветы и плоды",
  //   "painterYears": "1682 - 1749",
  //   "pictureDescr": "Натюрморт “Цветы и плоды” был заказан художнику лордом Уолполом. полотно находилось в галерее лорда в замке Хоутон-Холл с 1723 по 1779гг., а потом перешло в коллекцию Эрмитажа, где и находится по сей день"
  //   },

  //   {
  //     "id": "picture-3",
  //     "painterName": "",
  //     "picturePath": "../img/gallery_slider/gallery_slide_3.jpg",
  //     "pictureName": "Утес слепого",
  //     "painterYears": "",
  //     "pictureDescr": "Картина полна обмана - девушка выглядывает из-под повязки на глазах, а игра кажется предлогом, ведущим к соблазнению; две фигуры одеты в пасторальные костюмы, но могут быть благородными или буржуазными фигурами, играющими роль пастырских фигур; фон кажется деревом, но может быть декорацией. Короче говоря, кажется, что это стирает границу между правдой и ложью, реальностью и вымыслом."
  //     },

  // ]

    //modal open

    // gallerswiperButton.forEach((el) => {
    //   el.addEventListener('click', () => {
    //     modal.classList.add('show');
    //     createModalContent();
    //   })
    // })


    // create modal

    // const createModalContent = () => {
    //   const modalCreate = document.createElement('div')
    //   modalCreate.className = 'modal'

    //   modalCreate.insertAdjacentHTML('afterbegin', `
    //   <button class="modal__close btn">
    //     <span class="modal__close-line"></span>
    //     <span class="modal__close-line"></span>
    //   </button>

    //   <div class="modal__image">
    //     <img class="modal__image-picture" src="${modalData.picturePath}" alt="${modalData.pictureName}">
    //   </div>

    //   <div class="modal__descr">
    //     <h3 class="modal__painter-name">${modalData.painterName}</h3>
    //     <p class="modal__picture-name">“${modalData.pictureName}”</p>
    //     <span class="modal__painter-years">${modalData.painterYears}</span>

    //     <p class="modal__picture-descr">${modalData.pictureDescr}</p>
    //   </div>

    //   `);

    //   console.log(modalCreate);

    // }


    //close modal
    // modalClose.addEventListener('click', () => {
    //   modal.classList.remove('show');
    // })







