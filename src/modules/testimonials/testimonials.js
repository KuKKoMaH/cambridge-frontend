import { tns }      from "tiny-slider/src/tiny-slider";
import Breakpoints  from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

$('.testimonials__tabs-header').on('click', function () {
  const $el = $(this);
  const index = $el.index();

  $('.testimonials__tabs-header')
    .removeClass('testimonials__tabs-header--active')
    .eq(index)
    .addClass('testimonials__tabs-header--active');

  $('.testimonials__tab')
    .removeClass('testimonials__tab--active')
    .eq(index)
    .addClass('testimonials__tab--active');
});

$('.testimonials__video').magnificPopup({ type: 'iframe' });

let sliderVideos;
let sliderSocials;

const initVideosSliders = () => {
  const $node = $('.testimonials__videos');
  const $container = $node.find('.testimonials__items')[0];
  if ($container) {
    sliderVideos = tns({
      container:    $container,
      mode:         'carousel',
      mouseDrag:    true,
      controls:     false,
      // speed:        150,
      items:        1,
      // gutter:       14,
      navContainer: $node.find('.testimonials__nav')[0],
    });
  }
};

const initSocialsSliders = ( isBig ) => {
  const $node = $('.testimonials__socials');
  const $container = $node.find('.testimonials__items')[0];
  if ($container) {
    sliderVideos = tns({
      container:    $container,
      mode:         'carousel',
      mouseDrag:    true,
      items:        isBig ? 2 : 1,
      gutter:       isBig ? 40 : 0,
      prevButton:   $node.find('.testimonials__prev')[0],
      nextButton:   $node.find('.testimonials__next')[0],
      nav:          isBig ? false : true,
      navContainer: isBig ? null : $node.find('.testimonials__nav')[0],
      autoHeight:   isBig ? false : true,
    });
  }
};

const destroySlider = () => {
  if (sliderVideos) sliderVideos.destroy();
  sliderVideos = null;
  if (sliderSocials) sliderSocials.destroy();
  sliderSocials = null;
};

Breakpoints.on('sm', 'enter', () => {
  ScrollReveal().clean('.testimonials__item');
  ScrollReveal().reveal('.testimonials__videos', {
    distance:   '50px',
    interval:   80,
    viewFactor: .2,
  });
  destroySlider();
  initVideosSliders();
  initSocialsSliders(false);
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.testimonials__videos');
  ScrollReveal().reveal('.testimonials__item', {
    distance:   '50px',
    interval:   80,
    viewFactor: .2,
  });

  destroySlider();
  initSocialsSliders(true);
});
