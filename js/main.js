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

const minIdComments = 1;

const maxIdComaents = 25;

const minIdAvatar = 1;

const maxIdAvatar = 25;

const COMMENTS_LIST = 5;

const PHOTOS_LIST = 25;

const minLikes = 15;

const maxLikes = 20;

const PHOTOS = [];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCommentSize(checkedString, maxLength) {
  return checkedString.length <= maxLength;
}

checkCommentSize('some_string', 140);

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const сreateComments = () => ({
  id: getRandomNumber(minIdComments, maxIdComaents),
  avatar: `img/avatar-${ getRandomNumber(minIdAvatar, maxIdAvatar) }.svg` ,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

const getNumberComments = new Array(COMMENTS_LIST).fill(null).map(() => сreateComments());

const getPhotos = (index) => ({
  id: index ,
  url: `photos/${ index }.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(minLikes, maxLikes),
  comments: getNumberComments,
});

// eslint-disable-next-line id-length
for (let i =1; i<= PHOTOS_LIST; i++) {
  const PHOTO = getPhotos (i);
  PHOTOS.push (PHOTO);
}

// eslint-disable-next-line no-console
console.log(PHOTOS);
