import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = (props) => {
  const [foods, setfoods] = useState([]);
  const [cartItems, setOrderItems] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((response) => response.json())
      .then((data) => {
        setfoods(data);
        const initialCart = data.reduce((cart, food) => {
          cart[food.id] = 0;
          return cart;
        }, {});
        setOrderItems(initialCart);
      })
      .catch((error) =>
        console.error("Could not find the tasty burgers...", error)
      );
  }, []);

  let hamburgers = foods.slice(0, 14);
  let drinks = foods.slice(14, 19)
  let fries = foods.slice(19, 22)
  let desserts = foods.slice(22,26)
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let priceInfo = foods.find(
          (food) => Number(food.id) === Number(item)
        );
        if (priceInfo) {
          totalPrice += cartItems[item] * priceInfo.price;
        } else {
          console.warn(`No burger found for ID: ${item}`);
        }
      }
    }

    return totalPrice;
  };

  const resetCart = () => {
    setOrderItems((prevItems) => {
      const resetItems = {};
      for (const key in prevItems) {
        resetItems[key] = 0;
      }
      return resetItems;
    });
  };

  const addToCart = (itemId) => {
    setOrderItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setOrderItems((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const contextValue = {
    desserts,
    fries,
    drinks,
    hamburgers,
    foods,
    cartItems,
    resetCart,
    addToCart,
    removeFromCart,
    getTotalPrice,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};
