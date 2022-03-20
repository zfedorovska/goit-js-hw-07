import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector(".gallery");

const makeImageItemMarkup = image => {
  return `
  <div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
        class="gallery__image"
        src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
      />
    </a>
  </div>`
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
  let imageOriginal = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src=${imageOriginal} width="800" height="600">
  `)
  instance.show();
  document.querySelector('body').addEventListener('keydown', function(e) {
    if (e.key === "Escape") { 
      instance.close();
    }
  });
} 
  






