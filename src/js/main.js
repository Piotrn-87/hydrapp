"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

const buttonAdd = document.querySelector(".button-add--js");
const buttonRemove = document.querySelector(".button-remove--js");
const value = document.querySelector(".container__number--js");
const key = new Date().toISOString().slice(0, 10);

if (!localStorage.getItem(key)) {
  localStorage.setItem(key, 0)
  value.innerHTML = "0";
} else {
  value.innerHTML = localStorage.getItem(key);
}

buttonAdd.addEventListener('click', (e) => {
  let buttonAddValue = parseInt(localStorage.getItem(key)) + 1;
  localStorage.setItem(key, buttonAddValue);
  value.innerHTML = localStorage.getItem(key);
});

buttonRemove.addEventListener('click', (e) => {
  const currentValue = parseInt(value.innerHTML);
  if (currentValue > 0) {
    value.innerHTML = parseInt(value.innerHTML) - 1;
  }
});