// Swiper:
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// Select:
const element = document.getElementById('select');
    const choices = new Choices(element, {
      searchEnabled: false
    });


// Карта
ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [55.810921, 36.972268],
          zoom: 8
      }, {
          searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemarkWithContent = new ymaps.Placemark([55.810921, 36.972268], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: 'А эта — новогодняя',
          iconContent: '12'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: 'img/320/map-circle.svg',
          // Размеры метки.
          iconImageSize: [16, 16],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -5],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [10, 10],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });

      myMap.geoObjects
      // .add(myPlacemark)
      .add(myPlacemarkWithContent);
      });