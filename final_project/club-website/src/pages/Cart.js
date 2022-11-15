import React, { useState, useEffect } from "react";

import Binoculars1 from "../img/cart/shopping1.png";
import Binoculars2 from "../img/cart/shopping2.png";
import Watch from "../img/cart/shopping3.png";
import Glasses from "../img/cart/shopping4.png";

import CartItem from "../components/CartItem";

import "../css/cart.css";

function Cart() {
  const items = [
    {
      name: "Premium Binoculars",
      image: Binoculars1,
      price: 24.95,
      quantity: 1,
    },
    {
      name: "Zooming Binoculars",
      image: Binoculars2,
      price: 29.99,
      quantity: 1,
    },
    {
      name: "Waiters Watch",
      image: Watch,
      price: 34.99,
      quantity: 1,
    },
    {
      name: "Polar Shades",
      image: Glasses,
      price: 39.95,
      quantity: 1,
    },
  ];

  let originalCartItems = [];
  const pull_data = (data) => {
    originalCartItems.push(data);
  };

  // const pull_data = (data) => {
  //     for(let i = 0; i < data.length; i++){
  //         if(originalCartItems[i].name == data.name){
  //             break;
  //         } else {
  //             originalCartItems.push(data);
  //         }
  //     }
  // }

  const [cartItems, setCartItems] = useState(originalCartItems);
  const [subtotal, setSubTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubTotal(
      cartItems[0].subtotal +
        cartItems[1].subtotal +
        cartItems[2].subtotal +
        cartItems[3].subtotal
    );
    // setTax((subtotal * 0.13).toFixed(2));
    // setTotal((subtotal + tax).toFixed(2));
  });

  console.log(subtotal, tax, total);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-headers">
        <span>Items in Cart</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>Quantity</span>
        <span>Subtotal</span>
      </div>
      <div>
        <CartItem item={items[0]} func={pull_data} />
        <CartItem item={items[1]} func={pull_data} />
        <CartItem item={items[2]} func={pull_data} />
        <CartItem item={items[3]} func={pull_data} />
      </div>
      <div>
        <div className="cart-totals">
          <div className="row">
            <span>Subtotal</span>
            <span>${subtotal}</span>
          </div>
          <div className="row">
            <span>Tax</span>
            <span>${tax}</span>
          </div>
          <div className="total-row">
            <span>Total</span>
            <span>${total}</span>
          </div>
          <div className="button-row">
            <a className="empty-cart-button">Empty Cart</a>
            <a className="checkout-button" href="/shop/checkout">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
