import "./cart.scss";

const Cart = (cart) => {
  const CartElement = document.createElement("div");
  const itemsCountElement = document.createElement("span");
  const priceElement = document.createElement("span");
  const cartBtnOpen = document.createElement("button");
  itemsCountElement.innerText = `Кол-во товаров: ${cart.length}`;
  priceElement.innerText = `Цена: 0`;
  CartBtnOpen.innerText = `Корзина`;
  cartElement.className = "cart";
  priceElement.className = "cart__price";
  itemsCountElement.className = "cart__count";
  cartBtnOpen.className = "cart__btn-open";

  CartElement.appendChild(itemsCountElement);
  CartElement.appendChild(priceElement);
  CartElement.appendChild(cartBtnOpen);

  const updateCart = (newCart) => {
    itemsCountElement.innerText = `Кол-во товаров: ${newCart.length}`;
    const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
    priceElement.innerText = `Цена: ${sumPrice}`;
    console.log(sumPrice);
  };

  return { CartElement, updateCart };
};

export default Cart;
