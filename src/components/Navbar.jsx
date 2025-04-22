import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/ShopnestNoBG.png";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {cartItems, totalPrice} = useContext(CartContext);
  const navigateToCart = () => {
    navigate("/cart");
  };

  const navigateToHomepage = () => {
    navigate("/");
  };

  const navigateToAboutUs = () => {
    navigate("/about");
  };

  const navigateToStore = () => {
    navigate("/store");
  };

  return (
    <>
      <nav className="flex justify-between py-3 px-5 gap-2 bg-cyan-100 shadow w-screen">
        <div className="w-40 flex justify-center items-center">
          <img
            className=""
            src={logo}
            alt="Shopnest"
            onClick={() => {
              navigateToHomepage();
            }}
          />
        </div>
        <ul className="flex justify-evenly sm:gap-4 gap-2 items-center mx-2 flex-wrap">
          <li>
            <button
              className="cust-btn"
              onClick={() => {
                navigate("/about");
              }}
            >
              About Us
            </button>
          </li>
          <li>
            <button
              className="cust-btn"
              onClick={() => {
                navigateToStore();
              }}
            >
              Visit Store
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigateToCart();
              }}
              className="cust-btn flex justify-between gap-2"
            >
            Cart
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
