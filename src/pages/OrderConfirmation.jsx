import React from "react";
import { useNavigate } from "react-router-dom";
const OrderConfirmation = () => {
  const number = Math.floor(Math.random() * 60) + 10;

  let navigate = useNavigate();

  const handleAwesomeBtn = () => {
    navigate("/");
  };

  return (
    <div className="order-confirm-container">
      <h1>Thank You!</h1>
      <h2>Your order is on its way</h2>
      <img src="\images\Delivery.webp" className="burger-drop" alt="" />
      <h2>Time Estimation = {number} min</h2>
      <button className="confirm-button" onClick={handleAwesomeBtn}>
        Awesome
      </button>
    </div>
  );
};

export default OrderConfirmation;
