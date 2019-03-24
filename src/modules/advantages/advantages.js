import Breakpoints from 'breakpoints-js';
import { tns } from "tiny-slider/src/tiny-slider";
import ScrollReveal from 'scrollreveal';

const ITEMS_PER_SLIDE = 3;
const $node = $('.advantages__slider');

let slider = null;

ScrollReveal().reveal('.advantages__banner', {
  distance:   '50px',
  viewFactor: .2,
  origin:     'left',
});

ScrollReveal().reveal('.advantages__right', {
  distance:   '50px',
  viewFactor: .2,
  origin:     'right',
});

Breakpoints.on('sm', 'enter', () => {
  // destroyMap();
  // ScrollReveal().clean('.contacts__col, .contacts__col2');
  // ScrollReveal().reveal('.contacts__col, .contacts__col2', {
  //   distance:    '50px',
  //   viewFactor:  .2,
  // })
  if (slider) {
    slider.destroy();
    $('.advantages__slide').unwrap();
  }
  slider = tns({
    container:    $node.find('.advantages__slides')[0],
    navContainer: $node.find('.advantages__nav')[0],
    controls:     false,
  });
});
Breakpoints.on('lg', 'enter', () => {
  // ScrollReveal().clean('.contacts__col, .contacts__col2');
  // ScrollReveal().reveal('.contacts__col, .contacts__col2', {
  //   distance:    '50px',
  //   viewFactor:  .2,
  //   afterReveal: (el) => {
  //     if ($(el).find('#map').length) initMap();
  //   },
  // })

  if (slider) slider.destroy();

  let $slides = $('.advantages__slide');
  for (let i = 0; i < $slides.length; i += ITEMS_PER_SLIDE) {
    $slides.slice(i, i + ITEMS_PER_SLIDE).wrapAll('<div class="advantages__slide-big">');
  }

  slider = tns({
    container:  $node.find('.advantages__slides')[0],
    prevButton: $node.find('.advantages__prev')[0],
    nextButton: $node.find('.advantages__next')[0],
    nav:        false,
  });
});

