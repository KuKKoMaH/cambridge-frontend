import Breakpoints  from 'breakpoints-js';
import { tns }      from "tiny-slider/src/tiny-slider";
import ScrollReveal from 'scrollreveal';

const ITEMS_PER_SLIDE = 3;
let $node = $('.advantages__slider');

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
  if (slider) {
    slider.destroy();
    $('.advantages__slide').unwrap();
  }
  $node = $('.advantages__slider');
  const $container = $node.find('.advantages__slides')[0];
  if ($container) {
    slider = tns({
      container:    $container,
      navContainer: $node.find('.advantages__nav')[0],
      controls:     false,
    });
  }
});
Breakpoints.on('lg', 'enter', () => {
  if (slider) slider.destroy();

  let $slides = $('.advantages__slide');
  for (let i = 0; i < $slides.length; i += ITEMS_PER_SLIDE) {
    $slides.slice(i, i + ITEMS_PER_SLIDE).wrapAll('<div class="advantages__slide-big">');
  }

  const $container = $node.find('.advantages__slides')[0];
  if ($container) {
    slider = tns({
      container:  $container,
      prevButton: $node.find('.advantages__prev')[0],
      nextButton: $node.find('.advantages__next')[0],
      nav:        false,
    });
  }
});

