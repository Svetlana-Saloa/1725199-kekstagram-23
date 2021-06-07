//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function randomNumer(min, max) {
  min >= 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

randomNumer();

function commentsSize(checkedString, maxLength) {
  if (checkedString<=maxLength) {
    return true;
  } else {
    (checkedString>maxLength);
    return false;
  }
}

commentsSize();
