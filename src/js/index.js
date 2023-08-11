import { fetchBreeds, fetchCatByBreed } from './catsApi';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';
import { renderBreed } from './renderBreed';

const selectBreedEl = document.querySelector('.breed-select');
const loadEl = document.querySelector('.loader');
const catInfoEl = document.querySelector('.cat-info');

const renderFetchBreeds = () => {
  loadEl.classList.add('unvisible');

  fetchBreeds()
    .then(breeds => {
      const optionsEl = breeds
        .map(({ id, name }) => {
          return `<option value='${id}'>${name}</option>`;
        })
        .join('');
      // console.log(breeds);
      selectBreedEl.insertAdjacentHTML('beforeend', optionsEl);
      new SlimSelect({
        select: '.breed-select',
      });
    })
    .catch(error => {
      console.log(error);
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      );
    })
    .finally(() => {
      loadEl.classList.add('unvisible');
      selectBreedEl.classList.remove('unvisible');
    });
};
selectBreedEl.addEventListener('change', handleChangeSelect);

renderFetchBreeds();

function handleChangeSelect(event) {
  const breedId = event.target.value;

  fetchCatByBreed(breedId)
    .then(({ url, id, name, description, origin, temperament }) => {
      console.log('breedId', breedId);
      catInfoEl.innerHTML = '';
      loadEl.classList.remove('unvisible');
      catInfoEl.insertAdjacentHTML(
        'beforeend',
        renderBreed({ url, id, name, description, origin, temperament })
      );
      // loadEl.classList.add('unvisible');
    })
    .catch(error => {
      console.log(error);
      catInfoEl.innerHTML = '';
      Notiflix.Notify.failure('There is not information about this cat');
    })
    .finally(() => {
      loadEl.classList.add('unvisible');
    });
}
