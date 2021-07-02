import {createPhotos} from './data.js';

const loadingPictures = document.querySelector('.pictures'); //нахожу блок в которо должн отобр фото\
const pictureElement = document.createElement('div');
pictureElement.classList.add('pictures-list');
loadingPictures.appendChild(pictureElement);
//console.log (loadingPictures.children);

const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture'); //нахожу шаблон

const creatMiniPhotos = createPhotos ();// применяю функцию по генерации фото

const creatMiniPhotoFragment = document.createDocumentFragment();

creatMiniPhotos.forEach = (({url, likes, comments}) => {
  const miniPictureElement = templatePicture.cloneNode(true);
  miniPictureElement.querySelector('.picture__img').src = url;
  miniPictureElement.querySelector('picture__likes').innerHTML= likes;
  miniPictureElement.querySelector('picture__comments').textContent = comments;
  creatMiniPhotoFragment.appendChild(miniPictureElement);
});

pictureElement.appendChild(creatMiniPhotoFragment);

// eslint-disable-next-line no-console
//console.log (pictureElement);
export {pictureElement};
