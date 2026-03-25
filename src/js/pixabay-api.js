import axios from 'axios';
const KEY = '41516116-cb5e43cfa5be238239384ccbe';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
