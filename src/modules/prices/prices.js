import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

let slider;

const initSliders = () => {
  destroySlider();
  const $node = $('.prices__slider');
  slider = tns({
    container:    $node.find('.prices__slides')[0],
    mode:         'carousel',
    mouseDrag:    true,
    controls:     false,
    // speed:        150,
    items:        1,
    // gutter:       14,
    navContainer: $node.find('.prices__nav')[0],
  });
};

const destroySlider = () => {
  if (slider) slider.destroy();
  slider = null;
};

Breakpoints.on('sm', 'enter', () => {
  ScrollReveal().clean('.prices__slide');
  ScrollReveal().reveal('.prices__slider', {
    distance:   '50px',
    viewFactor: .2,
  });
  initSliders()
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.prices__slider');
  ScrollReveal().reveal('.prices__slide', {
    distance:   '50px',
    interval:   80,
    viewFactor: .2,
  });
  destroySlider();
});
