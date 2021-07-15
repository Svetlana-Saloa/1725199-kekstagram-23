import {createPhotos} from './data.js';

const miniPicturesContainer = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const miniPictures = createPhotos();

const miniPictureFragment = document.createDocumentFragment();

miniPictures.forEach(({url, likes, comments}) => {
  const miniPictureElement = templatePicture.cloneNode(true);
  miniPictureElement.querySelector('.picture__img').src = url;
  miniPictureElement.querySelector('.picture__likes').innerHTML= likes;
  miniPictureElement.querySelector('.picture__comments').textContent = comments.length;
  miniPictureFragment.appendChild(miniPictureElement);
});

miniPicturesContainer.appendChild(miniPictureFragment);

export{miniPictures};
