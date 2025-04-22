import { createContext, useEffect, useState } from "react";

// 1. Create context
export const CartContext = createContext();

// 2. Create provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 3. Functions like addToCart(), removeFromCart()

  useEffect(() => {
     let price = 0;
    for (let item of cartItems) {
      price += item.price * item.quantity;
    }
    setTotalPrice(price);
  },[cartItems])
  // const updateTotalPrice = () => {
   
  // };
  const addToCart = (product) => {
    const updateCart = () => {
      const ind = cartItems.findIndex((item) => item.name === product.name);
   
      if (ind === -1) {
        setCartItems([
          ...cartItems,
          {
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
          },
        ]);
      } else {
        const updatedItems = [...cartItems];
        updatedItems[ind] = {
          ...updatedItems[ind],
          quantity: updatedItems[ind].quantity + 1,
        };
        setCartItems(updatedItems);
      }
    };
    updateCart();
    // updateTotalPrice();
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.name !== product.name);
    setCartItems(updatedCart);
    // updateTotalPrice();
    console.log(cartItems);

  };

  return (
    <CartContext.Provider
      value={{ cartItems, totalPrice, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
