import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Store from "./components/Store";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import PaymentPage from "./components/PaymentPage";

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}
    >
      <Navbar>
      </Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/store" element={ <Store/> }/>
        <Route path="/cart" element = { <Cart/>} />
        <Route path="/about" element = {<AboutUs/> }/>
        <Route path="/payment" element = {<PaymentPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
