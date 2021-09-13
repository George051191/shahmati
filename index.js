const headButton = document.querySelector('.header__button');
const footerButton = document.querySelector('.footer__button');
const exitButtonHeader = document.querySelector('.header__exit-button');
const exitButtonFooter = document.querySelector('.footer__exit-button')
const regPopup = document.querySelector('.popup');
const info = document.querySelector('.popup__user-info');

headButton.addEventListener('click', function() {
    regPopup.classList.add('popup_opened');
});

footerButton.addEventListener('click', function() {
    regPopup.classList.add('popup_opened');
});

regPopup.addEventListener('submit', function(evt) {
    evt.preventDefault();
    regPopup.classList.remove('popup_opened');
    headButton.classList.remove('header__button_visible');
    exitButtonHeader.classList.add('header__exit-button_visible');
    footerButton.classList.remove('footer__button_visible')
    exitButtonFooter.classList.add('footer__exit-button_visible');
    info.reset();
});




//Свайпер для блока team
const swiper = new Swiper('.team__slider', {
    setWrapperSize: true,
    wrapperClass: 'team__slider-items',
    slideClass: 'team__slider-item',
    slidesPerView: 1,
    // spaceBetween: 28,
    breakpoints: {
        319: {
            slidesPerView: 1
        },
        768: {
            spaceBetween: 28,
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 3,

        },
        1250: {
            slidesPerView: 3,

        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    },
    pagination: {
        el: '.team__dots',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'team__dot',
        currentClass: 'team__dot_active',
        clickable: true,
        bulletActiveClass: 'team__dot_active',
    }
});
//Свайпер для блока game
const mySwier = new Swiper('.game__slider', {
    setWrapperSize: true,
    wrapperClass: 'game__slider-items',
    slideClass: 'game__slider-item',
    slidesPerView: 1,
    //spaceBetween: 80,
    breakpoints: {
        320: {
            slidesPerView: 2
        },
        768: {
            spaceBetween: 28,
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 2
                // spaceBetween: 28
        },
        1250: {
            slidesPerView: 3
                // spaceBetween: 80
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    },
    pagination: {
        el: '.game__dots',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'game__dot',
        currentClass: 'game__dot_active',
        clickable: true,
        bulletActiveClass: 'game__dot_active',
    }
});