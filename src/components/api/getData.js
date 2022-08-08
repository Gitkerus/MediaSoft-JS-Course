const baseUrl = "http://localhost:3000/notebooks";

export const getData = async (urlParams = null) => {
  const url = urlParams
    ? `${baseUrl}?` + new URLSearchParams(urlParams)
    : `${baseUrl}`;
  const response = await fetch(url);
  const responseData = await response.json();

  return responseData;
};
