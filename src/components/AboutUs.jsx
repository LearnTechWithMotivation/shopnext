import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-10 text-gray-800 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-shopnestblue text-shadow-md text-shadow-shopnestorange mb-4 text-center">
        Welcome to ShopNest
      </h1>
      <p className="text-lg md:text-xl max-w-3xl text-center mb-10">
        Your one-stop destination for a seamless and satisfying shopping experience.
      </p>

      <section className="max-w-4xl bg-blue-50 shadow-md p-8 rounded-xl mb-8 w-full">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
        <p className="text-gray-700 text-base">
          At <span className="font-semibold">ShopNest</span>, our mission is to empower people to shop smart, save time, and discover quality products from the comfort of their homes. We aim to provide a platform that is fast, reliable, and customer-focused.
        </p>
      </section>

      <section className="max-w-4xl bg-gray-100 shadow-md p-8 rounded-xl mb-8 w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
        <p className="text-gray-700 text-base">
          Born out of a desire to revolutionize online shopping, ShopNest was founded by a group of passionate developers and entrepreneurs. What started as a simple storefront has now evolved into a full-fledged e-commerce experience, tailored to meet the needs of the modern shopper.
        </p>
      </section>

      <section className="max-w-4xl bg-green-50 shadow-md p-8 rounded-xl w-full">
        <h2 className="text-2xl font-semibold text-green-700 mb-3">What We Value</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li className="mb-2"><span className="font-semibold">Customer Satisfaction</span> – You’re at the heart of everything we do.</li>
          <li className="mb-2"><span className="font-semibold">Quality & Trust</span> – We partner only with trusted brands and sellers.</li>
          <li className="mb-2"><span className="font-semibold">Innovation</span> – We're always working to improve your experience.</li>
          <li><span className="font-semibold">Accessibility</span> – Easy-to-use interface, secure payments, and fast delivery.</li>
        </ul>
      </section>

      <footer className="mt-10 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} ShopNest. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
