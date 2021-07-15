import {createPhotos} from './data.js';

const photos = createPhotos();

const bigPicturesContainer = document.querySelector('.big-picture');  // модальное
const pictureGallery = document.querySelectorAll('.picture'); //масив картинок  с которого пол
const bigPicture = document.querySelector('.big-picture__img');

const addThumbnailClickHandler =  (gallery, photo) => {
  gallery.addEventListener('click', () => {
    bigPicture.src = photo.url;
    bigPicturesContainer.classList.remove('hidden');
    //console.log('Клик');
    const bigPictureButtonClose = document.querySelector('.big-picture__cancel');
    bigPictureButtonClose.addEventListener ('click', () => {
      bigPicturesContainer.classList.add('hidden');
    });
    document.addEventListener('keydown', (evt) =>{
      if (evt.key === 27) {
        bigPicturesContainer.classList.add('hidden');
      }
      //console.log('ESC');
    });
  });
};

for (let i = 0; i < pictureGallery.length; i++) {
  addThumbnailClickHandler(pictureGallery[i], photos[i]);
}
