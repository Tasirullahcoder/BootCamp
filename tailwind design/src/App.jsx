import React from "react";
import Header from "./components/Header";
import Benifits from "./components/Benifits";
import Footer from "./components/Footer";
import BuyNow from "./components/BuyNow";
import Products from "./components/Products";
import BMI from "./components/BMI";
import Clients from "./components/Clients";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <>
      <Header />
      <main className="bg-gray-800">
        <Benifits />
        <BuyNow />
        <Products />
        <BMI />
        <Clients />
        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default App;
