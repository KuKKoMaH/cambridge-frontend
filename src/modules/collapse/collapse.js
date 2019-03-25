const $html = $('html');
import SmoothScroll from 'smooth-scroll';

const scroll = new SmoothScroll();

$('.collapse__button').on('click', () => {
  const $el = $('.programs__program--active');
  // $html.scrollTop($html.scrollTop() - $el.outerHeight());
  scroll.animateScroll($html.scrollTop() - $el.outerHeight(), null, {
    speed: 300,
    speedAsDuration: true,
    easing: 'Linear'
    // easing: 'easeOutQuad'
  });

  $el.removeClass('programs__program--active');
  $el.css('maxHeight', 0);
});
