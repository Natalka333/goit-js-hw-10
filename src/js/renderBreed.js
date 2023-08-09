const renderBreed = ({ url, id, name, description, origin, temperament }) => {
  return `<div class="cat-container"><img class="cat-picture" src="${url}" alt="${id}">
		<div class="cat-box">
	<h2 class=cat-info>${name}</h2>
  <p class="cat-desc">${description}</p>
  <p class="cat-temp">${temperament}</p>
  <p class="cat-origin">${origin}</p><
    /div></div >`;
};

export { renderBreed };
