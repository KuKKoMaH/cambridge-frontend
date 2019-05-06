import ScrollReveal from 'scrollreveal';

const $el = $('.video__video');
$el.magnificPopup({ type: 'iframe', });
// $el.on('click', () => {
//   const url = $el.data('url');
//   if (!url) return;
//   $el.find('img').remove();
//   const $frame = $('<iframe>');
//   $frame.attr('src', url);
//   $el.append($frame);
//   $el.data('url', null);
// });


ScrollReveal().reveal('.video__video, .video__cta, .video__title', {
  distance:   '50px',
  viewFactor: .4,
  interval:   80,
});