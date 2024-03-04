import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../context/app-context";

export const OrderItem = (props) => {
  const { cartItems, removeFromCart } = useContext(AppContext);
  const { id, name, info, price, image } = props.data;

  const cartItemAmount = cartItems[id];
  return (
    <div className="order-item">
      <div className="item-name">
        <p>{name}</p>
        <p>{cartItemAmount > 0 && <> ({cartItemAmount})</>}</p>
      </div>
      <p>${price * cartItemAmount}</p>
      <div className="trash-can">
        <FontAwesomeIcon icon={faTrash} onClick={() => removeFromCart(id)} />
      </div>
    </div>
  );
};
