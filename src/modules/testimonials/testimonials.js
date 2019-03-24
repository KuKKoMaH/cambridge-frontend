import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

$('.testimonials__video').magnificPopup({ type: 'iframe', });

let slider;

const initSliders = () => {
  destroySlider();
  const $node = $('.testimonials__slider');
  slider = tns({
    container:    $node.find('.testimonials__items')[0],
    mode:         'carousel',
    mouseDrag:    true,
    controls:     false,
    speed:        150,
    items:        1,
    // gutter:       14,
    navContainer: $node.find('.testimonials__nav')[0],
  });
};

const destroySlider = () => {
  if (slider) slider.destroy();
  slider = null;
};

Breakpoints.on('sm', 'enter', () => {
  ScrollReveal().clean('.testimonials__item');
  ScrollReveal().reveal('.testimonials__slider', {
    distance:   '50px',
    interval:   80,
    viewFactor: .2,
  });
  initSliders()
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.testimonials__slider');
  ScrollReveal().reveal('.testimonials__item', {
    distance:   '50px',
    interval:   80,
    viewFactor: .2,
  });

  destroySlider();
});
