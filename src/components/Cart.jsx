import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../context/app-context";
import { OrderItem } from "./order-item";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { foods, cartItems, getTotalPrice } = useContext(AppContext);
  const totalPrice = getTotalPrice();

  let navigate = useNavigate();

  const ToCashout = () => {
    navigate("/Cashout");
  };

  return (
    <div className="cart">
      <div className="order-titles">
        <h1>Your Order</h1>
        <h2>${totalPrice}</h2>
        <div className="cashout" onClick={ToCashout}>
          <FontAwesomeIcon icon={faSackDollar} />
          <p>Pay</p>
        </div>
      </div>
      <div className="order-cart-items">
        {foods.map((food) => {
          if (cartItems[food.id] !== 0) {
            return <OrderItem key={food.id} data={food} />;
          }
        })}
      </div>
      <div className="order-titles-desktop" onClick={ToCashout}>
        <h2>Total:${totalPrice}</h2>
        <div className="cashout">
          <FontAwesomeIcon icon={faSackDollar} />
          <p>Pay</p>
        </div>
      </div>
    </div>
  );
};
