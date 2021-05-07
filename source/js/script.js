'use strict';
var ESC_KEY = 'Escape';

var popup = document.querySelector('.popup');
var popupOpen = document.querySelector('.contacts-header__button');
var popupClose = popup.querySelector('.popup__button-cross');
var overlay = document.querySelector('.overlay');

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  popup.classList.remove('popup--hidden');
  overlay.classList.remove('overlay--hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  popup.classList.add('popup--hidden');
  overlay.classList.add('overlay--hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

popupOpen.addEventListener('click', function () {
  openPopup();
});

popupClose.addEventListener('click', function () {
  closePopup();
});

overlay.addEventListener('click', function () {
  popup.classList.add('popup--hidden');
  overlay.classList.add('overlay--hidden');
});

// Аккордеон

var accordionItems = document.querySelectorAll('.accordion');
var accordionPanes = document.querySelectorAll('.accordion__pane');

var hidePane = function (button, pane) {
  button.classList.add('accordion__toggle--inactive');
  pane.classList.add('accordion__pane--hidden');
};

var showPane = function (button, pane) {
  button.classList.remove('accordion__toggle--inactive');
  pane.classList.remove('accordion__pane--hidden');
};

var toggleAccordion = function (evt) {
  Array.prototype.forEach.call(accordionPanes, function (accordionPane) {
    var button = accordionPane.closest('.accordion').querySelector('.accordion__toggle');
    if (button === evt.target && !button.classList.contains('accordion__toggle--inactive') || button !== evt.target) {
      hidePane(button, accordionPane);
    } else if (button === evt.target) {
      showPane(button, accordionPane);
    }
  });
};

Array.prototype.forEach.call(accordionItems, function (accordion) {
  var accordionToggleButton = accordion.querySelector('.accordion__toggle');
  var accordionPane = accordion.querySelector('.accordion__pane');
  hidePane(accordionToggleButton, accordionPane);
  accordionToggleButton.addEventListener('click', toggleAccordion);
});
