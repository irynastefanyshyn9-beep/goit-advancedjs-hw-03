import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('#search-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const query = event.currentTarget.elements['search-text'].value.trim();

    if (!query) {
        iziToast.warning({ 
            message: "Please enter a search query!",
            position: 'topRight' 
        });
        return;
    }

    clearGallery();
    showLoader();

    try {
        const images = await fetchImages(query);
        
        if (images.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: 'topRight',
                backgroundColor: '#EF4040', 
                messageColor: '#FFFFFF',    
                messageSize: '16px',
                iconColor: '#FFFFFF',      
                theme: 'dark',              
                maxWidth: 432,              
                displayMode: 2,
                close: true,
                progressBarColor: '#B51B1B',
            });
        } else {
            renderGallery(images);
        }
    } catch (error) {
        iziToast.error({ 
            message: "Something went wrong! Please try again later.",
            position: 'topRight' 
        });
    } finally {
        hideLoader();
        form.reset();
    }
});