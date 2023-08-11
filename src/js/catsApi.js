import axios from 'axios';

const BASE_URL = `https://api.thecatapi.com/v1`;
axios.defaults.headers.common['x-api-key'] =
  'live_vaumoroPqd8p0uu6kFVMAXYOJOoT4vXhXIGYfCHRRSJYVpw49wZLNovtOafIjapI';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.data;
      // console.log(response.data);
    })
    .then(([data]) => {
      if (data.length === 0) {
        throw new Error();
      }
      // console.log(data);
      return {
        url: data.url,
        id: data.id,
        name: data.breeds[0].name,
        description: data.breeds[0].description,
        origin: data.breeds[0].origin,
        temperament: data.breeds[0].temperament,
      };
    });
}
