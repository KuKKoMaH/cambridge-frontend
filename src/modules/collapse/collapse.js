const $html = $('html');

$('.collapse__button').on('click', () => {
  const $el = $('.programs__program--active');
  $html.scrollTop($html.scrollTop() - $el.outerHeight());
  $el.removeClass('programs__program--active');
});
