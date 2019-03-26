import SmoothScroll from 'smooth-scroll';

$('.menu__button').on('click', () => {
  $('.menu').toggleClass('menu--active');
});

$('.menu__items a').on('click', () => {
  $('.menu').removeClass('menu--active');
});

new SmoothScroll('.menu__items a', {
  header: '.menu__wrapper',
});

// const $html = $('html');
// const $wrapper = $('.menu__wrapper');
// const menuHeight = 84;
// let prevPosition = $html.scrollTop();
// let initialPosition = prevPosition - menuHeight;
// let lastDirection = 1;
// $(window).on('scroll', () => {
//   const currentPosition = $html.scrollTop();
//   const diff = currentPosition - prevPosition;
//   if (!diff) return;
//   prevPosition = currentPosition;
//   const direction = diff > 0 ? 1 : -1;
//   const offset = direction > 0
//     ? Math.min(menuHeight, currentPosition - initialPosition)
//     : Math.max(0, menuHeight - (initialPosition - currentPosition));
//   // console.log(offset);
//   if (direction !== lastDirection) {
//     // console.log('dir');
//     // initialPosition = menuHeight + currentPosition - initialPosition;
//     initialPosition = currentPosition;
//     lastDirection = direction;
//   } else {
//     $wrapper.css({ top: -offset + 'px' });
//   }
// });

const $wrapper = $('.menu__wrapper');
const $html = $('html');
let menuActive = false;
$(window).on('scroll', () => {
  const scrollTop = $html.scrollTop();
  if(scrollTop > 10) {
    if(!menuActive) {
      $wrapper.addClass('menu__wrapper--active');
      menuActive = true;
    }
  } else {
    if(menuActive) {
      $wrapper.removeClass('menu__wrapper--active');
      menuActive = false;
    }
  }
});