import SimpleLightbox from "simplelightbox";
// Add imports above this line
import { galleryItems } from './gallery-items';
import "simplelightbox/dist/simple-lightbox.min.css";claet
// Change code below this line

const listItemsEl = document.querySelector('.gallery');

console.log(galleryItems);

listItemsEl.insertAdjacentHTML('afterbegin', createGallaryItem(galleryItems));

function createGallaryItem(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      alt=${description}
    />
  </a>`}).join("");
};

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});