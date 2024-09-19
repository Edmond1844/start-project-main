let popup = document.querySelector('.popup-ask');
let button = document.querySelector('.popup-ask__icon');

button.addEventListener('click', function() {
    popup.classList.add('popup-close');
});

let popupVideo = document.querySelector('.popup-video');
let videoBtn = document.querySelector('.section-vidio-phone__button');
let videoClose = document.querySelector('.popup-video__icon-btn');

videoBtn.addEventListener('click', function() {
    popupVideo.classList.add('popup-video-open');
});

videoClose.addEventListener('click', function() {
    popupVideo.classList.remove('popup-video-open');
    popupVideo.classList.add('popup-close');
});
