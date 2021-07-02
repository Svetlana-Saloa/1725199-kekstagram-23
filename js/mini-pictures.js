import {createPhotos} from './data.js';

const loadingMiniPictures = document.querySelector('.pictures');

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const creatMiniPictures = createPhotos();

const creatMiniPhotoFragment = document.createDocumentFragment();

creatMiniPictures.forEach(({url, likes, comments}) => {
  const miniPictureElement = templatePicture.cloneNode(true);
  miniPictureElement.querySelector('.picture__img').src = url;
  miniPictureElement.querySelector('.picture__likes').innerHTML= likes;
  miniPictureElement.querySelector('.picture__comments').textContent = comments.length;
  creatMiniPhotoFragment.appendChild(miniPictureElement);
});

loadingMiniPictures.appendChild(creatMiniPhotoFragment);
