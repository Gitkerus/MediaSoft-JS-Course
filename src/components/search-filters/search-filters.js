import "./search-filters.scss";

const SearchFilters = (sorting, searching) => {
  const SearchFiltersContainer = document.createElement("div");
  SearchFiltersContainer.className = "search-filters";

  const inputElement = document.createElement("input");
  inputElement.className = "search-filters__input";

  const searchButtonElement = document.createElement("button");
  const sortButtonElement = document.createElement("button");
  searchButtonElement.className = "search-filters__input-search";
  searchButtonElement.innerText = "Найти";
  sortButtonElement.className = "search-filters__sort-btn";
  sortButtonElement.innerText = "Сортировать";
  searchButtonElement.className = "search-filters__btn";
  sortButtonElement.className = "search-filters__btn";

  sortButtonElement.addEventListener("click", sorting);
  searchButtonElement.addEventListener("click", searching);

  SearchFiltersContainer.appendChild(inputElement);
  SearchFiltersContainer.appendChild(searchButtonElement);
  SearchFiltersContainer.appendChild(sortButtonElement);

  return SearchFiltersContainer;
};

export default SearchFilters;
