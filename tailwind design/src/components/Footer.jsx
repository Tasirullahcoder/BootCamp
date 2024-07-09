import React from "react";

import logo from "../assets/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className=" flex bg-[#767070] border-t-4 border-primary  justify-between items-center h-60 p-4 px-16">
        {/* COL ONE LOGO AN DESCRIPTION */}
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Gemini" />
          <p className="text-primary font-roboto text-xl">
            Gym<span className="text-white">Mini</span>Store
          </p>
          <p className="text-white font-poetsen">
            Exercise and fit yourself <br />
            This is Best Store For you
          </p>
        </div>

        {/* COL 2   */}
        <div className="flex flex-col text-white gap-3">
          <h2 className="font white font-poetsen text-xl">INFORMATION</h2>
          <ul>
            <li className="text-lg my-1">
              <a href="/home">Home</a>
            </li>
            <li className="text-lg my-1">
              <a href="/about-us">About US</a>
            </li>
            <li className="text-lg my-1">
              <a href="/Store">Store</a>
            </li>
          </ul>
        </div>

        {/* COL 3   */}
        <div className="flex flex-col text-white gap-3">
          <h2 className="font white font-poetsen text-xl">SUPPORT</h2>
          <ul>
            <li className="text-lg my-1">
              <a href="/home">Blog</a>
            </li>
            <li className="text-lg my-1">
              <a href="/about-us">Reviews</a>
            </li>
            <li className="text-lg my-1">
              <a href="/Store">Products</a>
            </li>
          </ul>
        </div>

        {/* COL 3   */}
        <div className="flex flex-col text-white gap-3">
          <h2 className="font white font-poetsen text-xl">NEWSLETTER</h2>
          <p className="font-roboto">
            Subscribe to our newsletter and amazing <br /> new updates
          </p>
          <div className="relative">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter email"
              className="bg-white rounded-3xl h-12 p-2 pl-4 w-full placeholder:text-xl focus:outline-primary"
            />
            <button className="bg-primary text-black rounded-3xl px-4 py-2 absolute right-2 top-1 font-roboto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* BOTTOM FOOTER */}
      <div className="flex justify-center items-center h-12 bg-[#767070] border-t-4 border-primary">
        <p className="font-roboto font-semibold text-white">
          &copy; {currentYear} GymMiniStore
        </p>
      </div>
    </footer>
  );
};

export default Footer;
