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
let cards = document.querySelectorAll('.section-work__wrapper');
let cardHidden = document.querySelector('.section-work__items--hidden');

for (let button of buttons) {
        button.addEventListener('click', function() {
            let target = button.getAttribute('data-target');
            for (let btn of buttons) {
                btn.classList.remove('section-work__items--active');
            }
            button.classList.add('section-work__items--active');
            for (let card of cards) {
                if (card.getAttribute('data-card') === target) {
                    card.classList.add('section-work__wrapper--active-card');
                } else {
                    card.classList.remove('section-work__wrapper--active-card');
                }
            };
            
    });
}


let buttonOpenQuestions = document.querySelector('.section-questions-answers__expand-button');
let questionsList = document.querySelector('.section-questions-answers__wrapper--none');

buttonOpenQuestions.addEventListener('click', function() {
    if(questionsList.classList.contains('section-questions-answers__wrapper--none')) {
        buttonOpenQuestions.textContent = 'Свернуть список';
        questionsList.classList.replace('section-questions-answers__wrapper--none', 'section-questions-answers__wrapper--visible');
    } else {
        buttonOpenQuestions.textContent = 'Смотреть все вопросы';
        questionsList.classList.replace('section-questions-answers__wrapper--visible', 'section-questions-answers__wrapper--none');
    }
});