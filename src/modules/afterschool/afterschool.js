import { tns } from "tiny-slider/src/tiny-slider";
import initGallery from '../../js/initGallery';
import ScrollReveal from 'scrollreveal';

const $node = $('.afterschool__slider');

tns({
  container:    $node.find('.afterschool__slides')[0],
  autoWidth:    true,
  gutter:       30,
  center:       true,
  prevButton:   $node.find('.afterschool__prev')[0],
  nextButton:   $node.find('.afterschool__next')[0],
  navContainer: $node.find('.afterschool__nav')[0],
});
initGallery({
  $items: $('.afterschool__slider a')
});

ScrollReveal().reveal('.afterschool__slider', {
  distance:     '50px',
  viewFactor:   .2,
  beforeReveal: (el) => {
  }
});


