document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.overlay')
  const modalClose = document.querySelector('.modal__close')
  const gallerswiperButton = document.querySelectorAll('.gallery__swiper-button')


    //modal

    // gallerswiperButton.forEach((el) => {
    //   el.addEventListener('click', () => {
    //     modal.classList.add('show');
    //     openModal();
    //   })
    // })

    // modalClose.addEventListener('click', () => {
    //   modal.classList.remove('show');
    // })

    const createModalContent = () => {

            const modalContent = `
          <div class="modal">
          <button class="modal__close btn">
            <span class="modal__close-line"></span>
            <span class="modal__close-line"></span>
          </button>

          <div class="modal__image">
            <img class="modal__image-picture" src="" alt="">
          </div>

          <div class="modal__descr">
            <h3 class="modal__painter-name"></h3>
            <p class="modal__picture-name">“”</p>
            <span class="modal__painter-years"></span>

            <p class="modal__picture-descr"></p>
          </div>
        </div>
      `;

      // const modalContent = `
      //     <div class="modal">
      //     <button class="modal__close btn">
      //       <span class="modal__close-line"></span>
      //       <span class="modal__close-line"></span>
      //     </button>

      //     <div class="modal__image">
      //       <img class="modal__image-picture" src="${picture}" alt="${pictureName}">
      //     </div>

      //     <div class="modal__descr">
      //       <h3 class="modal__painter-name">${painterName}</h3>
      //       <p class="modal__picture-name">“${pictureName}”</p>
      //       <span class="modal__painter-years">${painterYears}</span>

      //       <p class="modal__picture-descr">${pictureDescr}</p>
      //     </div>
      //   </div>
      // `;

      modal.insertAdjacentHTML('beforeend', modalContent);

    }

    createModalContent();

    const openModal = (event) => {
      const target = event.target
      const gallerswiperButton = target.closest('.gallery__swiper-slide');


    }




    modal.addEventListener('click', openModal)











})
