import React from "react";

import blog1 from "../assets/blogs1.png";
import blog2 from "../assets/blogs2.png";
import blog3 from "../assets/blogs3.png";
import blog4 from "../assets/blogs4.png";

const Blogs = () => {
  return (
    <section className="my-16 flex flex-col  items-center w-full">
      <div className="my-4 flex flex-col items-center ">
        <h2 className="text-4xl font-poetsen text-white">Best Blogs</h2>
        <div className="border-b-4 border-primary mt-4 w-36 text-center" />
      </div>
      <div className="flex mt-8">
        {/* BLOG 1 */}
        <div className="flex h-52 bg-bg_primary ">
          <img src={blog1} alt="Gym-Equipment" className="object-cover" />

          <div className="flex flex-col justify-center items-center">
            <h4 className="font-poetsen text-xl">Gym Equipments </h4>
            <p className="my-1 px-4 text-white">
              Weight loss is really important for our health
            </p>
            <button className="bg-primary text-black rounded-2xl text-xl font-roboto  py-2 px-6">
              Read more
            </button>
          </div>
        </div>

        {/* BLOG 2 */}
        <div className="flex h-52 bg-bg_primary">
          <img src={blog2} alt="Gym-Equipment" className="object-cover" />

          <div className="flex flex-col justify-center items-center">
            <h4 className="font-poetsen text-xl">Healthy Food</h4>
            <p className="my-1 px-4 text-white">
              Weight loss is really important for our health
            </p>
            <button className="bg-primary text-black rounded-2xl text-xl font-roboto  py-2 px-6">
              Read more
            </button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* BLOG 4 */}
        <div className="flex h-52 flex-row-reverse bg-bg_primary ">
          <img src={blog3} alt="Gym-Equipment" className="object-cover" />

          <div className="flex flex-col justify-center items-center">
            <h4 className="font-poetsen text-xl">Gym Equipments </h4>
            <p className="my-1 px-4 text-white">
              Weight loss is really important for our health
            </p>
            <button className="bg-primary text-black rounded-2xl text-xl font-roboto  py-2 px-6">
              Read more
            </button>
          </div>
        </div>

        {/* BLOG 4 */}
        <div className="flex flex-row-reverse h-52 bg-bg_primary">
          <img src={blog4} alt="Gym-Equipment" className="object-cover" />

          <div className="flex flex-col justify-center items-center">
            <h4 className="font-poetsen text-xl">Yoga</h4>
            <p className="my-1 px-4 text-white">
              Weight loss is really important for our health
            </p>
            <button className="bg-primary text-black rounded-2xl text-xl font-roboto  py-2 px-6">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
