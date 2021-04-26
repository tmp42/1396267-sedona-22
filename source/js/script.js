document.addEventListener("DOMContentLoaded", function () {
  // М
  if (document.querySelector(".main-nav__toggle")) {
    const navMain = document.querySelector('.main-nav');
    const navToggle = document.querySelector('.main-nav__toggle');
    // Убираем класс
    navMain.classList.remove('main-nav--nojs');
    // Добавляем обработчик события для кнопки
    navToggle.addEventListener('click', function (event) {
      event.preventDefault();
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
      }
    });
  }

});


if (document.querySelector(".reviews-form__button")) {
  var failurePopUp = document.querySelector(".failure-pop-up"),
    successPopUp = document.querySelector(".success-pop-up");
  var formFeedback = document.querySelector(".reviews-form"),
    btn = document.querySelector(".reviews-form__button"),
    inputs = formFeedback.querySelectorAll("input[required]");

  failurePopUp.classList.remove("failure-pop-up--visible");
  successPopUp.classList.remove("success-pop-up--visible");

//обработка клика отправки формы -> показ модальных окон
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    Array.from(inputs).find(function (el) {
      if (el.value == "") {
        failurePopUp.classList.add("failure-pop-up--visible");
      } else {
        successPopUp.classList.add("success-pop-up--visible");
      }
    });
  });

//закрывает модальное окно
  failurePopUp.querySelector(".failure-pop-up__button").addEventListener("click", function () {
    failurePopUp.classList.remove("failure-pop-up--visible");
  });

//закрывает модальное окно
  successPopUp.querySelector(".success-pop-up__button").addEventListener("click", function () {
    successPopUp.classList.remove("success-pop-up--visible");
  });
}

//карта
if (document.querySelector("#map")) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map("map", {
        center: [34.86988272933305, -111.7604317883911],
        zoom: 17
      }, {
        searchControlProvider: "yandex#search"
      }),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
      });

    myMap.controls.remove("geolocationControl");
    myMap.controls.remove("searchControl");
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("typeSelector");
    myMap.controls.remove("fullscreenControl");
    myMap.controls.remove("rulerControl");
    myMap.behaviors.disable(["scrollZoom"]);
    myMap.geoObjects.add(myPlacemark);
  });
}
