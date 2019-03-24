import { tns } from "tiny-slider/src/tiny-slider";

const $items = $('.steps__item');
const $pointer = $('.steps__pointer');

const onChangeSlide = () => {
  const info = slider.getInfo();
  const indexCurrent = info.index - 1;
  const $currentItem = $items.eq(indexCurrent);
  if (!$currentItem.length) return;
  $items.removeClass('steps__item--active');
  $currentItem.addClass('steps__item--active');
  $pointer.css({
    left:  $currentItem.position().left,
    width: $currentItem.outerWidth(),
  });
};

$items.on('click', function () {
  const $item = $(this);
  const index = $item.index();
  slider.goTo(index);
});

const $node = $('.steps__slider');
const slider = tns({
  container:  $node.find('.steps__slides')[0],
  mode:       'carousel',
  mouseDrag:  true,
  speed:      150,
  items:      1,
  nav:        false,
  prevButton: $node.find('.steps__prev')[0],
  nextButton: $node.find('.steps__next')[0],
});

slider.events.on('indexChanged', onChangeSlide);
$(window).on('resize', onChangeSlide);
onChangeSlide();
