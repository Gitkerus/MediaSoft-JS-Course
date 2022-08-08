import CartModalItem from "../cartModal-item/cartModal-item";
import CartModalList from "../cartModal-list";
import "./cart.scss";

const Cart = (cart) => {
  const CartElement = document.createElement("div");
  const itemsCountElement = document.createElement("span");
  const priceElement = document.createElement("span");
  const cartBtnOpen = document.createElement("button");

  const CartModal = document.createElement("div");
  const cartContainer = document.createElement("div");
  const cartModalCounter = document.createElement("span");
  const cartModalSum = document.createElement("span");
  const cartBtnClose = document.createElement("button");

  const cartModalList = CartModalList();

  const generateCart = (item) => {
    const cartModalElement = CartModalItem(item.name, item.price);
    cartModalList.appendChild(cartModalElement);
  };

  let sum = 0;
  const updateCart = (newCart, item) => {
    sum += item.price;
    itemsCountElement.innerText = `Кол-во товаров: ${newCart.length}`;
    priceElement.innerText = `Сумма: ${sum}`;
    cartModalCounter.innerText = `Кол-во товаров: ${newCart.length}`;
    cartModalSum.innerText = `Сумма: ${sum}`;
    // const sumPrice = newCart.reduce((sum, item) => sum + item.price, 0);
    // priceElement.innerText = `Сумма: ${sumPrice}`;
    generateCart(item);
  };

  itemsCountElement.innerText = `Кол-во товаров: ${cart.length}`;
  priceElement.innerText = `Сумма: 0`;
  cartBtnOpen.innerText = "Корзина";
  CartElement.className = "cart";
  priceElement.className = "cart__price";
  itemsCountElement.className = "cart__count";
  cartBtnOpen.className = "cart__btn-open";

  CartElement.appendChild(itemsCountElement);
  CartElement.appendChild(priceElement);
  CartElement.appendChild(cartBtnOpen);

  cartBtnOpen.addEventListener("click", function () {
    CartModal.classList.toggle("open-modal");
  });
  cartBtnClose.addEventListener("click", function () {
    CartModal.classList.remove("open-modal");
  });

  CartModal.className = "cartModal";
  cartContainer.className = "cartModal__container";
  cartModalCounter.innerText = `Кол-во товаров: ${cart.length}`;
  cartModalSum.innerText = `Сумма: 0`;
  cartModalSum.className = "cart__price";
  cartModalCounter.className = "cart__count";
  cartBtnClose.className = "cartModal__btn";
  cartBtnClose.innerText = "Закрыть корзину";

  CartModal.appendChild(cartContainer);
  cartContainer.appendChild(cartModalList);
  cartContainer.appendChild(cartModalCounter);
  cartContainer.appendChild(cartModalSum);
  cartContainer.appendChild(cartBtnClose);

  return { CartElement, CartModal, updateCart };
};

export default Cart;
