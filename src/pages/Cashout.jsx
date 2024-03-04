import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/app-context";
import { OrderItem } from "../components/order-item";
import { useNavigate } from "react-router-dom";

export default function Cashout() {
  const { foods, cartItems, getTotalPrice, resetCart } = useContext(AppContext);

  const totalPrice = getTotalPrice();
  let navigate = useNavigate();
  const [cityInput, setCityInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [swishOrCardInput, setSwishOrCardInput] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    if (cityInput && addressInput && paymentOption && swishOrCardInput) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [cityInput, addressInput, paymentOption, swishOrCardInput]);

  const handleBackButton = () => {
    navigate("/order");
  };

  const handleConfirmButton = (e) => {
    e.preventDefault();
    resetCart();
    navigate("/OrderConfirmation");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cityInput") {
      setCityInput(value);
    } else if (name === "addressInput") {
      setAddressInput(value);
    } else if (name === "swishOrCardInput") {
      setSwishOrCardInput(value);
    }
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
    setSwishOrCardInput("");
    if (e.target.value === "Swish") {
      setPlaceholderText("Enter Phone Number");
    } else {
      setPlaceholderText("0000-0000-0000-0000");
    }
  };

  const [placeholderText, setPlaceholderText] = useState(
    "What will you choose?"
  );

  return (
    <div className="cashout-container">
      {totalPrice === 0 ? (
        <>
          <div className="empty-cart">
            <h1>Empty Space</h1>
            <h1 onClick={handleBackButton} className="cart-cursor">
              Go Back
            </h1>
          </div>
        </>
      ) : (
        <>
          <div className="cashout-wrap">
            <div className="your-order">
              <div className="cashout-title">
                <p>Your Order:</p>
              </div>
              <div className="cashout-items">
                {foods.map((food) => {
                  if (cartItems[food.id] !== 0) {
                    return <OrderItem key={food.id} data={food} />;
                  }
                  return null;
                })}
              </div>
              <div className="cashout-info">
                <p>Total Cost:</p>
                <p>${totalPrice}</p>
              </div>
            </div>
            <div className="address-info">
              <form method="post" onSubmit={handleConfirmButton}>
                <div className="space-div"></div>
                <p>
                  Where to drop the bun?
                  <input
                    type="text"
                    name="cityInput"
                    placeholder="City"
                    value={cityInput}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="addressInput"
                    placeholder="Address"
                    value={addressInput}
                    onChange={handleInputChange}
                  />
                </p>
                <div className="space-div"></div>
                <p>
                  Select how you would like to give us your money
                  <label className="pay-button">
                    <input
                      type="radio"
                      name="payoptions"
                      value="Swish"
                      checked={paymentOption === "Swish"}
                      onChange={handlePaymentOptionChange}
                    />
                    <img
                      src="\images\Swish.png"
                      className="pay-img"
                      alt="Swish"
                    />
                  </label>
                  <label className="pay-button">
                    <input
                      type="radio"
                      name="payoptions"
                      value="CreditCard"
                      checked={paymentOption === "CreditCard"}
                      onChange={handlePaymentOptionChange}
                    />
                    <img
                      src="\images\creditcards.png"
                      className="pay-img"
                      alt="Creditcard"
                    />
                  </label>
                  <label>
                    <input
                      type="number"
                      name="swishOrCardInput"
                      value={swishOrCardInput}
                      onChange={handleInputChange}
                      placeholder={placeholderText}
                    />
                  </label>
                </p>
                <button
                  type="submit"
                  className="confirm-button"
                  disabled={isButtonDisabled}
                >
                  Confirm Order
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
