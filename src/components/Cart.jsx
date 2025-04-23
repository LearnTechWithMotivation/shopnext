import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-center text-2xl font-mono my-3">Your Cart {totalPrice==0?"is Empty":""}</h1>
      {totalPrice !== 0 ? (
        <div className="text-green-500 text-2xl text-center">
          $ {totalPrice.toFixed(2)}
        </div>
      ) : (
        <div className="flex justify-center items-center animate-jump ">
          <img
          className="w-1/2 rounded-md border-1 mt-5 shadow-lg shadow-gray-500 "
            src="https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZW1wdHklMjBjYXJ0fGVufDB8fDB8fHww"
            alt="Empty Cart"
          />
        </div>
      )}

      <section className=" flex flex-col justify-center items-center mt-5 gap-3">
        {cartItems.map((item) => (
          <div className="h-50 bg-gray-50 border-2 w-9/10 md:w-1/2 rounded-xl flex items-center gap-3 ">
            <div className="w-1/3 h-full border-r-2 flex justify-center items-center">
              <img className="w-3/5" src={item.image} alt={item.name} />
            </div>
            <div className="w-1/2 text-xs md:text-xl h-full flex flex-col justify-evenly items-center ">
              <h1 className="font-mono text-center font-semibold">
                {item.name}
              </h1>

              <h2>Price : ${item.price}</h2>
              <h2>Quantity : {item.quantity}</h2>
              <button
                onClick={() => {
                  removeFromCart(item);
                }}
                className="bg-red-500 py-2 px-5 ring-1 font-mono cursor-pointer rounded-md shadow-lg shadow-red-500/50 hover:shadow-gray-500/50 hover:text-white"
              >
                Remove
              </button>
            </div>

            <div className="bg-cyan-100 text-xs sm:text-2xl text-green-500 font-mono w-1/4 h-full ml-auto flex justify-center  items-center border-l-2 border-black">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length === 0 ? (
          ""
        ) : (
          <button className="bg-green-600 my-5 px-10 py-3 text-center rounded-md ring-1 font-mono cursor-pointer hover:text-white hover:scale-105 transition-transform shadow-lg shadow-green-600/50 hover:shadow-gray-500/50"
          onClick={() => {
            navigate('/payment')
          }}
          >
            
            Proceed to payment
          </button>
        )}
      </section>
    </>
  );
};

export default Cart;
