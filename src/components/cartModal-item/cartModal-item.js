import "./cartModal-item.scss";
import ItemImg from "../../assets/img/item.png";

const CartModalItem = (name, price) => {
  const ItemElement = document.createElement("div");
  ItemElement.className = "cartModalItem";

  const nameElement = document.createElement("span");
  nameElement.innerText = name;
  nameElement.className = "cartModalItem__name";

  const priceElement = document.createElement("span");
  priceElement.className = "cartModalItem__price";
  priceElement.innerText = `Цена: ${price}`;

  const imgElement = document.createElement("img");
  imgElement.src = ItemImg;
  imgElement.className = "item__img";

  ItemElement.appendChild(nameElement);
  ItemElement.appendChild(imgElement);
  ItemElement.appendChild(priceElement);

  return ItemElement;
};

export default CartModalItem;
