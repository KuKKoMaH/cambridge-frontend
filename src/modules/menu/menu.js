import SmoothScroll from 'smooth-scroll';

$('.menu__button').on('click', () => {
  $('.menu').toggleClass('menu--active');
});

$('.menu__items a').on('click', () => {
  $('.menu').removeClass('menu--active');
});

new SmoothScroll('.menu__items a', {
  header: '.menu__wrapper',
});
