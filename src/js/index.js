import { fetchBreeds, fetchCatByBreed } from './catsApi';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';
import { renderBreed } from './renderBreed';

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

selectBreedEl.addEventListener('change', handleChangeSelect);

function handleChangeSelect(event) {
  // catInfoEl.innerHTML = '';
  const breedId = event.target.value;
  console.log('breedId', breedId);

  fetchCatByBreed(breedId)
    .then(breed => renderBreed(breed))
    .then(breed => console.log(breed))
    .catch(error => {
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    });
  new SlimSelect({
    select: '#selectElement',
  });
}
