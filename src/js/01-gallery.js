// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this lin
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);


galleryEl.insertAdjacentHTML('afterbegin', galleryItem(galleryItems));

function galleryItem(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
    return `<li style="list-style-type: none" class="gallery__item">

                <a class="gallery__link" href="large-image.jpg">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                </a>
            </li> `
    }).join('');
};

 const gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });