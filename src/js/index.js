import { fetchBreeds, fetchCatByBreed } from './catsApi';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';

const selectBreedEl = document.querySelector('.breed-select');
const loadEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('cat-info');

fetchBreeds()
  .then(breeds => {
    const optionsEl = breeds
      .map(({ id, name }) => {
        return `<option value='${id}'>${name}</option>`;
      })
      .join('');
    console.log(breeds);
    selectBreedEl.insertAdjacentHTML('beforeend', optionsEl);
    new SlimSelect({
      select: '#selectElement',
    });
  })
  .catch(error => {
    console.log(error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

// selectBreedEl.addEventListener('change');

fetchCatByBreed().then(breed => {
  const murkupPicture = `<img class="cat-picture" src=${breed.cfa_url} alt=${breed.id}>`;
  const murkupDescript = `<h2 class=cat-info>${breed.breeds[0].name}</h2>
<p class="cat-desc">${breed.breeds[0].description}</p>
<p class="cat-temp">${breed.breeds[0].temperament}</p>
<p class="cat-origin">${breed.breeds[0].origin}</p>`;
  catInfoEl.insertAdjacentHTML('beforeend', murkupPicture);
  catInfoEl.insertAdjacentHTML('beforeend', murkupDescript);
});
