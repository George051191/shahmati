const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    allowTouchMove: false,
    slidesPerView: 3,
    spaceBetween: 80,
    autoplay: {
        delay: 3000
    },
    allowTouchMove: false,
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