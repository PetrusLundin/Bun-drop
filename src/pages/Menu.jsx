import { render } from "@testing-library/react";
import React, { useContext } from "react";
import BurgerCard from "../components/BurgerCard";
import { AppContext } from "../context/app-context";

export default function Meny() {
  const { hamburgers, drinks, fries, desserts } = useContext(AppContext);

  return (
    <div>
      <div className="main-container">
        <div>
          <p className="menu-titles">Burgers</p>
          <div className="card-wrap">
            {hamburgers.map((burger) => (
              <BurgerCard key={burger.id} data={burger} showButton={false} />
            ))}
          </div>
        </div>
        <div>
          <p className="menu-titles">Drinks</p>
          <div className="card-wrap">
            {drinks.map((drink) => (
              <BurgerCard key={drink.id} data={drink} showButton={false} />
            ))}
          </div>
        </div>
        <div>
          <p className="menu-titles">Fries</p>
          <div className="card-wrap">
            {fries.map((frie) => (
              <BurgerCard key={frie.id} data={frie} showButton={false} />
            ))}
          </div>
        </div>
        <div>
          <p className="menu-titles">Desserts</p>
          <div className="card-wrap">
            {desserts.map((desserts) => (
              <BurgerCard key={desserts.id} data={desserts} showButton={false} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
