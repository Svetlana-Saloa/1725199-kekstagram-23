const DESCRIPTIONS = [
  'Фото из жизни',
  'Улыбаемся и машем',
  'Что-то пошло не так',
  'Красиво жить не запретишь',
  'Прекрастное фото',
  'Мой мир',
];
const NAMES = [
  'Вася',
  'Миша',
  'Катя',
  'Кот',
  'Ромашка',
  'Марина',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const MIN_ID_COMENTS = 1;
const MAX_ID_COMENTS = 25;
const MIN_NUMBER_AVATAR = 1;
const MAX_NUMBER_AVATAR = 6;
const NUMBER_OF_COMMENTS = 5;
const NUMBER_OF_PHOTOS = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//const checkCommentSize = (checkedString, maxLength) => checkedString.length <= maxLength;

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const сreateComment = () => ({
  id: getRandomNumber(MIN_ID_COMENTS, MAX_ID_COMENTS),
  avatar: `img/avatar-${ getRandomNumber(MIN_NUMBER_AVATAR, MAX_NUMBER_AVATAR) }.svg` ,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const photos = [];

const getPhotos = (index) => ({
  id: index ,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments:  new Array(NUMBER_OF_COMMENTS).fill(null).map(() => сreateComment()),
});

const createPhotos = () => {
  for (let i =1; i<= NUMBER_OF_PHOTOS; i++) {
    const photo = getPhotos (i);
    photos.push (photo);
  }
  return getPhotos;
};

createPhotos ();

// eslint-disable-next-line no-console
//console.log(photos);
