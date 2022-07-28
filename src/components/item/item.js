import ItemImg from "../../assets/img/item.png";
import "./item.scss";

const Item = (name, price, onAdd) => {
  console.log(ItemImg);
  const ItemElement = document.createElement("div");
  ItemElement.className = "item";

  const nameElement = document.createElement("span");
  nameElement.innerText = name;
  nameElement.className = "item__name";

  const priceElement = document.createElement("span");
  priceElement.className = "item__price";
  priceElement.innerText = `Цена: ${price}`;

  const imgElement = document.createElement("img");
  imgElement.src = ItemImg;
  imgElement.className = "item__img";

  const buttonElement = document.createElement("button");
  buttonElement.className = "item__add-button";
  buttonElement.innerText = "Добавить";
  buttonElement.addEventListener("click", onAdd);

  ItemElement.appendChild(nameElement);
  ItemElement.appendChild(imgElement);
  ItemElement.appendChild(priceElement);
  ItemElement.appendChild(buttonElement);

  return ItemElement;
};

export default Item;
