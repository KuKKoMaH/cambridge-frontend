import { tns } from "tiny-slider/src/tiny-slider";

// const $items   = $('.steps__item');
// const $pointer = $('.steps__pointer');
const sliders = [];

const onChangeSlide = ([$node, slider]) => {
  const $items       = $node.find('.steps__item');
  const $pointer     = $node.find('.steps__pointer');
  const info         = slider.getInfo();
  const indexCurrent = info.index - 1;
  const $currentItem = $items.eq(indexCurrent);
  if (!$currentItem.length) return;
  $items.removeClass('steps__item--active');
  $currentItem.addClass('steps__item--active');
  $pointer.css({
    left : $currentItem.position().left,
    width: $currentItem.outerWidth(),
  });
};

$('.steps__item').on('click', function () {
  const $item      = $(this);
  const index      = $item.index();
  const $root      = $item.parents('.steps');
  const [, slider] = sliders.find(([$node]) => $node.get(0) === $root.get(0));
  slider.goTo(index);
});

const $nodes = $('.steps');
$nodes.each((i, el) => {
  const $node     = $(el);
  const slider    = tns({
    container : $node.find('.steps__slides')[0],
    mode      : 'carousel',
    mouseDrag : true,
    // speed:      150,
    items     : 1,
    nav       : false,
    prevButton: $node.find('.steps__prev')[0],
    nextButton: $node.find('.steps__next')[0],
  });
  const sliderObj = [$node, slider];
  slider.events.on('indexChanged', () => onChangeSlide(sliderObj));
  sliders.push(sliderObj);
});

$(window).on('resize', () => {
  sliders.forEach(slider => onChangeSlide(slider));
});
sliders.forEach(slider => onChangeSlide(slider));
