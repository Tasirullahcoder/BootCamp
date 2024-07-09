import React from "react";
import logo from "../assets/images/logo.png";
import Search from "./Search";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-96 items-center h-16 my-4">
          <div className="flex flex-col justify-center items-center">
            <img src={logo} alt="Gemini" />
            <p className="text-primary font-roboto">
              Gym<span className="text-white">Mini</span>Store
            </p>
          </div>
          <div className="flex justify-between items-center gap-28">
            <ul className="flex gap-8">
              <li className="text-primary font-roboto  text-xl">
                <a href="/home">Home</a>
              </li>
              <li className="text-white font-roboto text-xl">
                <a href="/store">Store</a>
              </li>
              <li className="text-white font-roboto text-xl">
                <a href="/blog">Blog</a>
              </li>
            </ul>
            <div>
              <Search />
            </div>
            <div className="w-14 h-14 bg-[#777472]  rounded-full  text-center flex items-center justify-center  text-white">
              <AiOutlineShoppingCart className="text-4xl  " />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
