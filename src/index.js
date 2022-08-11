import Item from "./components/item";
import Cart from "./components/cart";
import ItemsList from "./components/items-list";
import SearchFilters from "./components/search-filters/search-filters";

import { getData } from "./components/api/getData";
import { createRequest } from "./components/api/createRequest";

import "./index.scss";
import "normalize.css";

let inputValue = "";
let sortPrice = "";

const sort = (sortPrice) => {
  if (sortPrice === "") {
    sortPrice = "asc";
  } else if (sortPrice === "asc") {
    sortPrice = "desc";
  } else {
    sortPrice = "";
  }
};

const del = () => {
  var parent = document.querySelector(".items-list");
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
  generateItems();
};

const sorting = () => {
  sort();
  del();
};
const searching = () => {
  inputValue = document.querySelector(".search-filters__input").value;
  del();
};

let cart = [];

const itemsList = ItemsList();
const searchFilters = SearchFilters(sorting, searching);
const { CartElement, CartModal, updateCart } = Cart(cart);

const generateItems = async () => {
  const mocks = await getData(createRequest(inputValue, sortPrice));
  mocks.forEach((item) => {
    const onAdd = () => {
      cart.push(item);
      updateCart(cart, item);
    };
    const itemElement = Item(item.name, item.price, onAdd);
    itemsList.appendChild(itemElement);
  });
};

generateItems();
document.body.appendChild(searchFilters);
document.body.appendChild(itemsList);
document.body.appendChild(CartElement);
document.body.appendChild(CartModal);
