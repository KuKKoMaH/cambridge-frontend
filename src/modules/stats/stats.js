import { tns } from "tiny-slider/src/tiny-slider";
import Breakpoints from 'breakpoints-js';
import { CountUp } from 'countup.js';
import ScrollReveal from 'scrollreveal';

let slider;

$('.stats__chart').each((i, el) => {
  //.stats__round
  const $chart = $(el);
  const $round = $chart.find('circle');
  const length = +$chart.data('length');
  $round.css('strokeDasharray', `1px ${length}px`);
  $round.addClass('stats--inited');
});

const startAnimate = ($chart) => {
  if ($chart.data('inited')) return;
  const circle = $chart.find('circle')[0];
  const to = $chart.data('to');
  const length = $chart.data('length');

  const countUp = new CountUp($chart.find('.stats__number')[0], to, {
    startVal:     0,
    useEasing:    false,
    duration:     1.5,
    formattingFn: (n) => n + '%',
  });

  circle.style.strokeDasharray = `${length * to / 100}px ${length}px`;
  countUp.start();

  $chart.data('inited', true);
};

const onChangeSlide = () => {
  const info = slider.getInfo();
  const indexCurrent = info.index;
  const $chart = $(info.slideItems[indexCurrent]).find('.stats__chart');
  if ($chart.length) startAnimate($chart);
};

const initSliders = () => {
  destroySlider();
  const $node = $('.stats');
  slider = tns({
    container:    $node.find('.stats__items')[0],
    mode:         'carousel',
    mouseDrag:    true,
    controls:     false,
    // speed:        150,
    items:        1,
    navContainer: $node.find('.stats__nav')[0],
  });

  slider.events.on('indexChanged', onChangeSlide);
  onChangeSlide();
};

const destroySlider = () => {
  if (slider) slider.destroy();
  slider = null;
};

Breakpoints.on('sm', 'enter', () => {
  ScrollReveal().clean('.stats__item');
  ScrollReveal().reveal('.stats__slider', {
    distance:   '50px',
    viewFactor: .2,
  });

  initSliders();
});
Breakpoints.on('lg', 'enter', () => {
  destroySlider();
  ScrollReveal().clean('.stats__slider');
  ScrollReveal().reveal('.stats__item', {
    distance:    '50px',
    viewFactor:  .2,
    interval:    80,
    afterReveal: (el) => {
      const $chart = $(el).find('.stats__chart');
      if ($chart.length) startAnimate($chart);
    }
  });

  // $('.stats__chart').each((i, chart) => {
  //   startAnimate($(chart));
  // });
});
