import Item from "./components/item";
import Cart from "./components/cart";
import ItemsList from "./components/items-list";

import "./index.scss";
import "normalize.css";

const mocks = [
  {
    id: 1,
    name: "notebook1",
    price: 10000,
  },
  {
    id: 2,
    name: "notebook2",
    price: 12000,
  },
  {
    id: 3,
    name: "notebook3",
    price: 15000,
  },
];

let cart = [];

const itemsList = ItemsList();
const { CartElement, updateCart } = Cart(cart);

document.body.appendChild(itemsList);

const generateItems = () => {
  mocks.forEach((item) => {
    const onAdd = () => {
      //   console.log("item added", item.id);
      cart.push(item);
      updateCart(cart);
    };
    const itemElement = Item(item.name, item.price, onAdd);
    itemsList.appendChild(itemElement);
  });
};

generateItems();
document.body.appendChild(CartElement);
