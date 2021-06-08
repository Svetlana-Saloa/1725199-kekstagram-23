//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomNumber(1, 100);

function checkCommentSize(checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

checkCommentSize('some_string', 140);
