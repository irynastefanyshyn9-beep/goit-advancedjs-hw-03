import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('#loader');

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

export function renderGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
                <div class="info">
                    <div class="info-item"><b>Likes</b>${likes}</div>
                    <div class="info-item"><b>Views</b>${views}</div>
                    <div class="info-item"><b>Comments</b>${comments}</div>
                    <div class="info-item"><b>Downloads</b>${downloads}</div>
                </div>
            </a>
        </li>
    `).join('');

    gallery.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() { gallery.innerHTML = ''; }
export function showLoader() { loader.classList.add('visible'); }
export function hideLoader() { loader.classList.remove('visible'); }