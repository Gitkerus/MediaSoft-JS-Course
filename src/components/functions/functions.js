export const sort = (sortPrice) => {
  if (sortPrice === "") {
    sortPrice = "asc";
  } else if (sortPrice === "asc") {
    sortPrice = "desc";
  } else {
    sortPrice = "";
  }
};

export const del = () => {
  var parent = document.querySelector(".items-list");
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
  generateItems();
};
