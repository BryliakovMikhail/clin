ymaps.ready(init);
function init() {
  let myMap = new ymaps.Map(
    'map',
    {
      center: [55.976202, 92.815668],
      zoom: 13,
      controls: [],
    },
    {
      suppressMapOpenBlock: true,
    }
  );

  let myPlacemark = new ymaps.Placemark(
    [55.97618, 92.790772],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'images/ymap-mark.svg',
      iconImageSize: [60, 60],
      iconImageOffset: [-3, -42],
    }
  );
  myMap.geoObjects.add(myPlacemark);
}