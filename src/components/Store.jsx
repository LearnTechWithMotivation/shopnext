import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const respone = await fetch("https://fakestoreapi.com/products");
      const data = await respone.json();
      setProducts(data);
    };

    fetchData();
  }, []);

  const { addToCart } = useContext(CartContext);

  const updateCart = (name, price, image) => {
    addToCart({ name: name, price: price, image: image });
  };

  return (
    <div
    className="flex justify-center items-center"
    >
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-3 gap-3 auto-rows-fr ">
        {products.map((product) => {
          return (
            <div
              key={product.title}
              className="bg-gray-50 flex flex-col justify-evenly items-center rounded-md border-1 p-4 h-full shadow-sm"
            >
              <img
                className="w-3/4 h-40 object-contain"
                src={product.image}
                alt={product.title}
              />

              <h1 className="font-bold font-mono text-center">
                {product.title}
              </h1>

              <p className=" text-gray-500 text-sm line-clamp-4">
                {product.description}
              </p>

              <p className="text-green-500 font-mono text-xl">
                ${product.price}
              </p>

              <button
                className="shadow-lg transition-transform shadow-shopnestblue  ring-1 rounded-md p-2 mt-2 bg-shopnestblue text-shopnestorange font-bold hover:scale-105 hover:font-bold hover:text-white cursor-pointer hover:shadow-gray-500"
                onClick={() => {
                  updateCart(product.title, product.price, product.image);
                }}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Store;
