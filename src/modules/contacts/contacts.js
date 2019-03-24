import scriptLoader from '../../js/scriptLoader';
import Breakpoints from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

let loaded = false;
let ymaps = null;
let map = null;

const loadMap = () => {
  if (loaded) return;
  loaded = true;
  scriptLoader('http://api-maps.yandex.ru/2.1/?lang=ru_RU&ver=1&onload=INIT_MAP');
};

const destroyMap = () => {
  if (map) {
    map.destroy();
    map = null;
  }
};

const initMap = () => {
  loadMap();
  if (!ymaps) return;
  destroyMap();
  map = new ymaps.Map("map", {
    center: window.MAP_CENTER,
    zoom:   window.MAP_ZOOM
  });

  map.geoObjects.add(new ymaps.Placemark(window.MAP_CENTER, {}))
};

window.INIT_MAP = (a) => {
  ymaps = a;
  initMap();
};

Breakpoints.on('sm', 'enter', () => {
  destroyMap();
  ScrollReveal().clean('.contacts__col, .contacts__col2');
  ScrollReveal().reveal('.contacts__col, .contacts__col2', {
    distance:    '50px',
    viewFactor:  .2,
  })
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.contacts__col, .contacts__col2');
  ScrollReveal().reveal('.contacts__col, .contacts__col2', {
    distance:    '50px',
    viewFactor:  .2,
    afterReveal: (el) => {
      if ($(el).find('#map').length) initMap();
    },
  })
});
