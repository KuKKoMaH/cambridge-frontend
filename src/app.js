import 'jquery';
import 'magnific-popup/dist/jquery.magnific-popup.js';
import 'jquery.maskedinput/src/jquery.maskedinput';
import SmoothScroll from 'smooth-scroll';
// import './js/$.paroller.js';

import './init';
import './js/paroller';
import openPopup    from './js/openPopup';
import './modules/menu/menu';
import './modules/excursion/excursion';
import './modules/excursionForm/excursionForm';
import './modules/about/about';
import './modules/sliders/sliders';
import './modules/progress/progress';
import './modules/programs/programs';
import './modules/features/features';
import './modules/steps/steps';
import './modules/bullets/bullets';
import './modules/collapse/collapse';
import './modules/stats/stats';
import './modules/video/video';
import './modules/afterschool/afterschool';
import './modules/advantages/advantages';
import './modules/prices/prices';
import './modules/testimonials/testimonials';
import './modules/form/form';
import './modules/contacts/contacts';

$('input[type="tel"]').mask("+7 (999) 999-99-99");

$('.popup__opener').on('click', ( e ) => {
  e.preventDefault();
  e.stopPropagation();
  openPopup({ items: { src: $(e.delegateTarget).attr('href') } });
  return false;
});

window.onpageshow = function ( event ) {
  if (event.persisted) {
    window.location.reload();
  }
};

$('.triangle')
  .addClass('triangle--active')
  .each(( i, el ) => {
    window.paroller(el);
  });
//   .paroller({
//     direction:  'vertical',
//     type:       'foreground',
//     transition: null
//   })
//   .addClass('triangle--active');

new SmoothScroll('a[href*="#"]', { header: '.menu__wrapper' });

window.showThank = () => openPopup({ items: { src: '#thank' } });
