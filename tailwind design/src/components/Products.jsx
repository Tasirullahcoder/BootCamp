import React from "react";

import Product1 from "../assets/Product-1.png";
import Product2 from "../assets/Product-3.png";
import Product3 from "../assets/Product-3.png";

const Products = () => {
  return (
    <section className="my-16 flex flex-col justify-center items-center">
      <div className="my-4 flex flex-col items-center ">
        <h2 className="text-4xl font-poetsen text-white">Latest Product</h2>
        <div className="border-b-4 border-primary mt-4 w-28 text-center" />
      </div>
      <div className="flex mt-8 gap-16">
        <div className="border-b-8 border-primary border-r-8 rounded-3xl">
          <img src={Product1} alt="Running-Machine" className="w-64 h-60" />
        </div>
        <div className="border-b-8 border-primary border-r-8 rounded-3xl">
          <img src={Product2} alt="Bisep-Machine" className="w-64 h-60" />
        </div>
        <div className="border-b-8 border-primary border-r-8 rounded-3xl">
          <img src={Product2} alt="Running-Machine" className="w-64 h-60" />
        </div>
      </div>
    </section>
  );
};

export default Products;
