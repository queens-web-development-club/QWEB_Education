import "../css/cart.css";
import React, {useState} from "react";


function CartItem(props) {
    let originalQuantity = props.item.quantity;
    let price = props.item.price;
    const [quantity, setQuantity] = useState(originalQuantity);
    const [subtotal, setSubtotal] = useState(price * quantity);

    props.func({name: props.item.name, quantity: quantity, subtotal: subtotal});

    function addQuantity(){
        setQuantity(quantity + 1);
        setSubtotal((price * (quantity + 1)).toFixed(2));
    }

    function subtractQuantity(){
        if(quantity > 1){
            setQuantity(quantity - 1);
            setSubtotal((price * (quantity - 1)).toFixed(2));
        }
    }

  return (
    <div className="cart-item">
      <div className="cart-item__img">
        <img src={props.item.image} alt={props.item.name} width="100px" />
      </div>
      <div className="cart-item__details">
        <p className="cart-item__name">{props.item.name}</p>
      </div>
      <div className="cart-item__quantity">
        <button 
            className="cart-item__edit-num-button"
            onClick={subtractQuantity}
        >-</button>
        <p className="cart-item__quantity-number">{quantity}</p>
        <button 
            className="cart-item__edit-num-button" 
            onClick={addQuantity}
        >+</button>
      </div>
      <div className="cart-item__remove">
        <p className="cart-item__price">${subtotal}</p>
      </div>
    </div>
  );
}

export default CartItem;