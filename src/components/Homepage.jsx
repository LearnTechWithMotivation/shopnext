import React from "react";
import logo from "../assets/Images/ShopnestNoBG.png";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const navigate = useNavigate();

  const navigateToStore = () => {
    navigate('/store');
  }
  return (
    <>
      <div className="w-full h-screen relative flex justify-center items-center">
        {/* className="w-screen h-screen bg-[url('https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=2023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" */}

        <div
          // className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1729601724864-7bd7d9ff7894?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHdlYnNpdGUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-cover bg-center inset-0"
          className="absolute w-full h-full bg-[url('https://images.unsplash.com/photo-1501820434261-5bb046afcf6b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMyfHx3ZWJzaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center inset-0"
          aria-hidden="true"
        ></div>

      <section className="bg-cyan-100/40 ring-4 ring-blue-50 rounded-2xl w-3/4  py-5 z-10 relative flex justify-center items-center flex-col" >
          <h1 
            className="text-6xl w-3/4 flex my-2 text-center text-stroke font-semibold justify-center items-center text-white   text-shadow-white text-shadow-lg/30"
          >Welcome to Shopnest </h1>


          <h2
            className="text-2xl text-sky-200 font-mono text-center text-shadow-2xs text-shadow-black"
          >Nest Your Needs - Shop with Ease</h2>

          <button 
            className="text-xl text-center font-mono bg-shopnestorange px-5 hover:scale-110 hover:font-semibold mt-2 rounded-md ring-2 ring-shopnestblue"
            onClick={() => {
              navigateToStore();
            }}
          >
            Store
          </button>
        </section>

        <div className="w-full h-full bg-black/50 absolute inset-0"></div>
      </div>
    </>
  );
};

export default Homepage;
