const swiper = new Swiper('.team__slider', {
    wrapperClass: 'team__slider-items',
    slideClass: 'team__slider-item',
    slidesPerView: 3,
    spaceBetween: 80,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            spaceBetween: 28,
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 28
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 80

        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'team__dot',
        currentClass: 'team__dot_active',
        clickable: true,
        bulletActiveClass: 'team__dot_active',
    }
});

const mySwier = new Swiper('.game__slider', {
    wrapperClass: 'game__slider-items',
    slideClass: 'game__slider-item',
    slidesPerView: 3,
    spaceBetween: 80,
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        768: {
            spaceBetween: 28,
            slidesPerView: 2
        },
        1050: {
            slidesPerView: 2,
            spaceBetween: 28
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 80
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 80
        }
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement: 'button',
        bulletClass: 'team__dot',
        currentClass: 'team__dot_active',
        clickable: true,
        bulletActiveClass: 'team__dot_active',
    }
});