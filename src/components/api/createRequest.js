export const createRequest = () => {
  const queryParams = {};
  if (inputValue !== "") {
    queryParams.name_like = `${inputValue}`;
  }
  if (sortPrice) {
    queryParams._sort = "price";
    queryParams._order = sortPrice;
  }
  return queryParams;
};
