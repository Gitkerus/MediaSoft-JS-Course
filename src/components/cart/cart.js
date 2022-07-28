import "./cart.scss";

const Cart = (cart) => {
  const CartElement = document.createElement("div");
  const itemsCountElement = document.createElement("span");
  const priceElement = document.createElement("span");
  itemsCountElement.innerText = `Кол-во товаров: ${cart.length}`;
  priceElement.innerText = `Цена: 0`;
  CartElement.className = "cart";
  priceElement.className = "cart__price";
  itemsCountElement.className = "cart__count";

  CartElement.appendChild(itemsCountElement);
  CartElement.appendChild(priceElement);

  const updateCart = (newCart) => {
    itemsCountElement.innerText = `Кол-во товаров: ${newCart.length}`;
    const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
    priceElement.innerText = `Цена: ${sumPrice}`;
    console.log(sumPrice);
  };

  return { CartElement, updateCart };
};

export default Cart;
