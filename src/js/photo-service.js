const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '25776093-bb4fa85787ae7c355f18a58ee';

export default class PhotoApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchActicles() {
    const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizonta&safesearch=true&per_page=40`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        return data;
      });
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

// export function fetchCountries(name) {
//   const url = `${BASE_URL}?key=${API_KEY}&q=${name}&image_type=photo&orientation=horizonta&safesearch=true&per_page=40`;

//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     })
//     .then(data => {
//       return data;
//     });
// }
