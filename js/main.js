/* eslint-disable id-length */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCommentSize(checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

checkCommentSize('some_string', 140);

const DESCRIPTION = [
  'Фото из жизни',
  'Улыбаемся и машем',
  'Что-то пошло не так',
  'Красиво жить не запретишь',
  'Прекрастное фото',
  'Мой мир',
];

const NAME = [
  'Вася',
  'Миша',
  'Катя',
  'Кот',
  'Ромашка',
  'Марина',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const LIKES = [ ];

for (let i = 15; i <= 200; i++) {
  LIKES[i] = i + 1;
}

const INDEX_FOTO = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const INDEX_FOTO_ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const INDEX_COMENT = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const INDEX_AVATAR = [1,2,3,4,5,6];

const COMMENTS_OF_NUMBER = 5;

const FOTO_OF_NUMBER = 25;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const getCreateComments = () => ({
  id: getRandomArrayElement(INDEX_COMENT),
  avatar: `img/avatar-${ getRandomArrayElement(INDEX_AVATAR) }.svg` ,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});

const getNumberComments = new Array(COMMENTS_OF_NUMBER).fill(null).map(() => getCreateComments());

const COMMENTS = [getNumberComments];

// eslint-disable-next-line no-console
//console.log(getNumberComments);

const getdescriptionPhotos = () => ({
  id: getRandomArrayElement(INDEX_FOTO_ID),
  url: `photos/${ getRandomArrayElement(INDEX_FOTO) } .jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes:  getRandomArrayElement(LIKES),
  comments: getRandomArrayElement(COMMENTS),
});

// eslint-disable-next-line no-unused-vars
const getPotos = new Array(FOTO_OF_NUMBER).fill(null).map(() => getdescriptionPhotos());

//console.log(getPotos);
