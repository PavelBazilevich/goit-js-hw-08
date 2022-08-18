// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery")

function createItemGallaryMarkup(items) {
    return items.map( ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</div>`).join('');
};
galleryEl.innerHTML = createItemGallaryMarkup(galleryItems);

function oneClick(event) { event.preventDefault() };

galleryEl.addEventListener('click', oneClick);

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionPosition: "bottom", captionDelay: 250,});