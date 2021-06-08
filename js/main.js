//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomNumer(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumer(1,100);

function commentsSize(checkedString, maxLength) {
  return checkedString<=maxLength;
}

commentsSize('some_string',140);
