import axios from 'axios';

const BASE_URL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common['x-api-key'] =
  'live_ vaumoroPqd8p0uu6kFVMAXYOJOoT4v XhXIGYfCHRRSJYVpw49wZLNovtOafI japI';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
  // console.log(response.data);
}
