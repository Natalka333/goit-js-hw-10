import { catInfoEl } from './index';
const renderBreed = breed => {
  const murkupPicture = `<img class="cat-picture" src=${breed.cfa_url} alt=${breed.id}>`;
  //   const murkupDescript = `<h2 class=cat-info>${breed.breeds[0].name}</h2>
  // <p class="cat-desc">${breed.breeds[0].description}</p>
  // <p class="cat-temp">${breed.breeds[0].temperament}</p>
  // <p class="cat-origin">${breed.breeds[0].origin}</p>`;
  catInfoEl.insertAdjacentHTML('beforeend', murkupPicture);
  // catInfoEl.insertAdjacentHTML('beforeend', murkupDescript);
};

export { renderBreed };
