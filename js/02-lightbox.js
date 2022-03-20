import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeImageItemMarkup = image => {
  return `
    <a class="gallery__item" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        alt=${image.description}
        title=${image.description}
      />
    </a>`
};

const makeImages = galleryItems
  .map(makeImageItemMarkup)
    .join('');
  
galleryEl.insertAdjacentHTML('beforeend', makeImages);
galleryEl.addEventListener('click', onImageClick);

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };
    const lightbox = new SimpleLightbox('.gallery a', { captionDelay:250});
    lightbox.on('show.simplelightbox');
}

