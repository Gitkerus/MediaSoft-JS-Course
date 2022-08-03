import Item from "./components/item";
import Cart from "./components/cart";
import ItemsList from "./components/items-list";

import "./index.scss";
import "normalize.css";


const url = "http://localhost:3000/notebooks";


const getData = async() => {
  const resp = await fetch(url);
  const data = await resp.json();
  return data;
};

// const mocks = [];

let cart = [];

const itemsList = ItemsList();
const { CartElement, updateCart } = Cart(cart);

document.body.appendChild(itemsList);

const generateItems = async() => {
  const mocks = await getData();
  mocks.forEach((item) => {
    const onAdd = () => {
      cart.push(item);
      updateCart(cart);
    };
    const itemElement = Item(item.name, item.price, onAdd);
    itemsList.appendChild(itemElement);
  });
};

generateItems();
document.body.appendChild(CartElement);
