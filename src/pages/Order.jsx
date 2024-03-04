import React, { useContext } from "react";
import BurgerCard from "../components/BurgerCard";
import { AppContext } from "../context/app-context";
import { Cart } from "../components/Cart";

export default function About() {
  const { hamburgers, drinks, fries, desserts, cartItems } = useContext(AppContext);
  return (
    <div className="order-main">
      <div className="menu-container">
        <div>
        <p className="menu-titles">Burgers</p>
        <div className="card-wrap">
          {hamburgers.map((burger) => (
            <BurgerCard  key={burger.id} data={burger} showButton={true} />
          ))}
        </div>
        </div>
        <div>
        <p className="menu-titles">Drinks</p>
        <div className="card-wrap">
          {drinks.map((drink) => (
            <BurgerCard  key={drink.id} data={drink} showButton={true} />
          ))}
        </div>
        </div>
        <div>
        <p className="menu-titles">Fries</p>
        <div className="card-wrap">
          {fries.map((frie) => (
            <BurgerCard  key={frie.id} data={frie} showButton={true} />
          ))}
        </div>
        </div>
        <div>
        <p className="menu-titles">Desserts</p>
        <div className="card-wrap">
          {desserts.map((desserts) => (
            <BurgerCard  key={desserts.id} data={desserts} showButton={true} />
          ))}
        </div>
        </div>
      </div>      
      <div className="order-container">        
      <div className="current-order">
      <h1 className="container-titles-desktop">Your Order:</h1>
        <Cart
        />
      </div>
      </div>
    </div>
  );
}
