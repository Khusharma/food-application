import { elements } from "./base";

export const reu = () => elements.searchInput.value;

export const clearser = () => {
  elements.searchInput.value = "";
};

export const clearrec = () => {
  elements.searchRest.innerHTML = "";
};

const renderSearch = reci => {
  const markup = `
  <li>
  <a class="results__link" href="#${reci.recipe.uri}">
      <figure class="results__fig">
          <img src="${reci.recipe.image}" alt="${reci.recipe.label}">
      </figure>
      <div class="results__data">
          <h4 class="results__name">${reci.recipe.label}</h4>
          <p class="results__author">${reci.recipe.source}</p>
      </div>
  </a>
</li>
  `;

  elements.searchRest.insertAdjacentHTML("beforeend", markup);
};

export const renderResult = recis => {
  recis.forEach(renderSearch);
};
