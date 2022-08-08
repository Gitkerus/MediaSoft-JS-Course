import Item from "./components/item";
import Cart from "./components/cart";
import ItemsList from "./components/items-list";
import { getData } from "./components/api/getData";

import "./index.scss";
import "normalize.css";

let inputValue = "";
let sortPrice = "";

const searchButton = document.querySelector(".filters__input-search");
const sortButton = document.querySelector(".filters__sort-btn");

const sort = () => {
  if (sortPrice === "") {
    sortPrice = "asc";
    console.log(sortPrice);
  } else if (sortPrice === "asc") {
    sortPrice = "desc";
    console.log(sortPrice);
  } else {
    sortPrice = "";
    console.log(sortPrice);
  }
};

const del = () => {
  var parent = document.querySelector(".items-list");
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
  generateItems();
};

sortButton.addEventListener("click", () => {
  sort();
  del();
});
searchButton.addEventListener("click", () => {
  inputValue = document.querySelector(".filters__input").value;
  del();
});

const createRequest = () => {
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

let cart = [];

const itemsList = ItemsList();
const { CartElement, CartModal, updateCart } = Cart(cart);

const generateItems = async () => {
  const mocks = await getData(createRequest());
  mocks.forEach((item) => {
    const onAdd = () => {
      cart.push(item);
      updateCart(cart, item);
      // updateCart(cart);
    };
    const itemElement = Item(item.name, item.price, onAdd);
    itemsList.appendChild(itemElement);
  });
};

generateItems();
document.body.appendChild(itemsList);
document.body.appendChild(CartElement);
document.body.appendChild(CartModal);
