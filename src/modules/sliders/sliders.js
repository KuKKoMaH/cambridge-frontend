import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.sliders__slider', {
  // distance:   '50px',
  // origin:     'left',
  viewFactor:   .2,
  beforeReveal: (el) => {
    const isReverse = el.classList.contains('sliders__slider--reverse');
    const $slide = $(el).find('.sliders__slide:first-child');
    ScrollReveal().reveal($slide.find('.sliders__content')[0], {
      distance:   '50px',
      origin:     isReverse ? 'right' : 'left',
      viewFactor: .3
    });
    ScrollReveal().reveal($slide.find('.sliders__image')[0], {
      distance:   '50px',
      origin:     isReverse ? 'left' : 'right',
      viewFactor: .3
    });
  }
});

let sliders;

const initSliders = (big) => {
  if (sliders) destroySliders();
  sliders = [];
  $('.sliders__slider').each((i, node) => {
    const $node = $(node);
    sliders.push(tns({
      container:    $node.find('.sliders__slides')[0],
      mode:         big ? 'gallery' : 'carousel',
      mouseDrag:    big ? false : true,
      // autoHeight:   big ? false : true,
      // animateIn:    "jello",
      // animateOut:   "rollOut",
      speed:        150,
      items:        1,
      prevButton:   $node.find('.sliders__prev')[0],
      nextButton:   $node.find('.sliders__next')[0],
      navContainer: $node.find('.sliders__nav')[0],
    }));
  });
};

const destroySliders = () => {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].destroy();
  }
};

Breakpoints.on('sm', 'enter', () => initSliders(false));
Breakpoints.on('lg', 'enter', () => initSliders(true));
