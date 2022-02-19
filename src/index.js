import './sass/main.scss';

import PhotoApiService from './js/photo-service';

const saerchForm = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');

const photoApiService = new PhotoApiService();

saerchForm.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onMoreLoad);

function onSearch(event) {
  event.preventDefault();

  photoApiService.searchQuery = event.currentTarget.elements.searchQuery.value;
  photoApiService.fetchActicles();
}

function onMoreLoad(params) {
  photoApiService.fetchActicles();
}
