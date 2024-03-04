import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  Routes,
  NavLink,
} from "react-router-dom";
import React from "react";
import "./App.css";
//pages
import ScrollTop from "./components/ScrollTop";
import Cashout from "./pages/Cashout"
import OrderConfirmation from "./pages/OrderConfirmation";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import Drones from "./pages/Drones";
import FAQ from "./pages/FAQ";
import { AppContextProvider } from "./context/app-context";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <div className="header">
          <div className="overlay"></div>
          <div className="navbar">
            <div className="logo">
              <NavLink to="/">
                <img src="\images\logo yellow.png" />
              </NavLink>
            </div>
            <div className="navlinks">
              <NavLink to="menu">Menu</NavLink>
              <NavLink to="order">Order</NavLink>
              <NavLink to="drones">Drones</NavLink>
              <NavLink to="faq">FAQ</NavLink>
            </div>
          </div>
        </div>

        <main>
          <ScrollTop />
          <Routes>
            <Route path="/OrderConfirmation" element={<OrderConfirmation/>} />
            <Route path="/Cashout" element={<Cashout />} />
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/drones" element={<Drones />} />
            <Route path="/order" element={<Order />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
