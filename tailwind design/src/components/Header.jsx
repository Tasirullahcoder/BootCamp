import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div
      className="relative h-screen "
      style={{
        backgroundImage: `url("images/Hero.png")`,
        objectFit: "cover",
      }}
    >
      {/* Transparent Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-8xl tracking-normal text-transparent leading-10 text-stroke mb-4 font-poetsen">
            CHANGE
          </h1>
          <h2 className="text-xl md:text-6xl font-normal  font-poetsen text-white mb-8">
            YOUR LIFESTYLE
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
