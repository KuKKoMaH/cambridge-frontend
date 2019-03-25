import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';

let slider;

const initSliders = () => {
  destroySlider();
  const $node = $('.features__slider');
  slider = tns({
    container:    $node.find('.features__items')[0],
    mode:         'carousel',
    mouseDrag:    true,
    controls:     false,
    // speed:        150,
    items:        1,
    gutter:       15,
    navContainer: $node.find('.features__nav')[0],
  });
};

const destroySlider = () => {
  if (slider) slider.destroy();
  slider = null;
};

Breakpoints.on('sm', 'enter', () => initSliders());
Breakpoints.on('lg', 'enter', () => {
  destroySlider();
});
