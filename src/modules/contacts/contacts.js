import scriptLoader from '../../js/scriptLoader';
import Breakpoints  from 'breakpoints-js';
import ScrollReveal from 'scrollreveal';

let loaded = false;
let ymaps = null;
let map = null;

const loadMap = () => {
  if (loaded) return;
  loaded = true;
  scriptLoader('https://api-maps.yandex.ru/2.1/?lang=ru_RU&ver=1&onload=INIT_MAP');
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
    center: window.MAP_MARKERS[0][0],
    zoom:   window.MAP_ZOOM,
  });

  for (let i = 0; i < window.MAP_MARKERS.length; i++) {
    var marker = window.MAP_MARKERS[i];
    map.geoObjects.add(new ymaps.Placemark(marker[0], {
      balloonContent: marker[1],
    }));
  }

  map.setBounds(map.geoObjects.getBounds());
};

window.INIT_MAP = ( a ) => {
  ymaps = a;
  initMap();
};

Breakpoints.on('sm', 'enter', () => {
  destroyMap();
  ScrollReveal().clean('.contacts__col, .contacts__col2');
  ScrollReveal().reveal('.contacts__col, .contacts__col2', {
    distance:   '50px',
    viewFactor: .2,
  });
});
Breakpoints.on('lg', 'enter', () => {
  ScrollReveal().clean('.contacts__col, .contacts__col2');
  ScrollReveal().reveal('.contacts__col, .contacts__col2', {
    distance:    '50px',
    viewFactor:  .2,
    afterReveal: ( el ) => {
      if ($(el).find('#map').length) initMap();
    },
  });
});
