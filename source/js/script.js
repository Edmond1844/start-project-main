let openBtn = document.querySelector('.section-work__btn');
let popupModal = document.querySelector('.popup-ask');
let button = document.querySelector('.popup-ask__icon');

openBtn.addEventListener('click', function() {
    popupModal.classList.add('popup-ask-open');
});

button.addEventListener('click', function() {
    popupModal.classList.add('popup-close');
});

let videoBtn = document.querySelector('.section-vidio-phone__button');
let popupVideo = document.querySelector('.popup-video');
let videoClose = document.querySelector('.popup-video__icon-btn');

videoBtn.addEventListener('click', function() {
    popupVideo.classList.add('popup-video-open');
});

videoClose.addEventListener('click', function() {
    popupVideo.classList.remove('popup-video-open');
    popupVideo.classList.add('popup-close');
});

let buttons = document.querySelectorAll('.section-work__items');

for (let button of buttons) {
        button.addEventListener('click', function() {
        button.classList.toggle('section-work__items--active');
    });
}

// let span = document.querySelector('.section-work__title-more');
// let visit = document.querySelector('.section-work__wrapper-more');

