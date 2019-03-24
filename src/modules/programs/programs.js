import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';
import SmoothScroll from 'smooth-scroll';
import ScrollReveal from 'scrollreveal';

const scroll = new SmoothScroll();

let slider;

function onClickProgram() {
  const $el = $(this);
  const program = $el.data('program');
  if (!program) return;
  const $program = $(`.programs__program[data-program="${program}"]`);
  if (!$program.length) return;
  $program.addClass('programs__program--active');

  scroll.animateScroll($program[0], null, { offset: 100 });
}

const initSliders = () => {
  destroySlider();
  const $node = $('.programs__slider');
  slider = tns({
    container:    $node.find('.programs__slides')[0],
    mode:         'carousel',
    mouseDrag:    true,
    controls:     false,
    speed:        150,
    items:        1,
    // gutter:       14,
    navContainer: $node.find('.programs__nav')[0],
  });
  $('.programs__link').on('click', onClickProgram);
};

const destroySlider = () => {
  if (slider) slider.destroy();
  $('.programs__link').on('click', onClickProgram);
  slider = null;
};

Breakpoints.on('sm', 'enter', () => {
  ScrollReveal().clean('.programs__slide');
  ScrollReveal().reveal('.programs__slider', {
    distance:   '50px',
    viewFactor: .2,
    interval:   80,
  });
  initSliders()
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.programs__slider');
  ScrollReveal().reveal('.programs__slide', {
    distance:   '50px',
    viewFactor: .2,
    interval:   80,
  });
  destroySlider();
});
