import { tns }      from "tiny-slider/src/tiny-slider";
import Breakpoints  from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

let sliders;

ScrollReveal().reveal('.progress__slider', {
  distance:     '50px',
  viewFactor:   .2,
  beforeReveal: () => {

    const initSliders = ( big ) => {
      if (sliders) destroySliders();
      sliders = [];
      const $node = $('.progress__slider');
      const $container = $node.find('.progress__slides')[0];
      if ($container) {
        sliders.push(tns({
          container:    $container,
          // mode:         big ? 'gallery' : 'carousel',
          mode:         'carousel',
          mouseDrag:    big ? false : true,
          // autoHeight:   big ? false : true,
          // animateIn:    "jello",
          // animateOut:   "rollOut",
          // speed:        150,
          items:        1,
          prevButton:   $node.find('.progress__prev')[0],
          nextButton:   $node.find('.progress__next')[0],
          navContainer: $node.find('.progress__nav')[0],
        }));
      }
    };

    const destroySliders = () => {
      for (let i = 0; i < sliders.length; i++) {
        sliders[i].destroy();
      }
    };

    Breakpoints.on('sm', 'enter', () => initSliders(false));
    Breakpoints.on('lg', 'enter', () => initSliders(true));

  },
});
