import ScrollReveal from 'scrollreveal';

const activeClass = 'about__slide--active';

ScrollReveal().reveal('.about__content', {
  distance:   '50px',
  origin:     'right',
  viewFactor: .3,
});

ScrollReveal().reveal('.about__slider', {
  distance:   '50px',
  origin:     'left',
  viewFactor: .3,
});

$('.about__prev').on('click', () => {
  const $active = $('.' + activeClass);
  const $slides = $('.about__slide');
  let index = $active.index() - 1;
  if (index < 0) index = $slides.length - 1;
  const $next = $slides.eq(index);

  $active.removeClass(activeClass);
  $next.addClass(activeClass);
});

$('.about__next').on('click', () => {
  const $active = $('.' + activeClass);
  const $slides = $('.about__slide');
  const index = $active.index() + 1;
  let $next = $slides.eq(index);
  if (!$next.length) $next = $slides.eq(0);

  $active.removeClass(activeClass);
  $next.addClass(activeClass);
});

$('.about__subtext').on('click', () => {
  $('.about__subtext').addClass('about__subtext--hidden');
  $('.about__sub').css('max-height', $('.about__subinner').height());
});
