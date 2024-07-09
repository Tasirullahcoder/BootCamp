import React from "react";

import RuningPic from "../assets/Running.png";

const BMI = () => {
  return (
    <section className="my-28 flex flex-col justify-center items-center">
      <div className="my-4 flex flex-col items-center ">
        <h2 className="text-4xl font-poetsen text-white">Calculate Your BMI</h2>
        <div className="border-b-4 border-primary mt-4 w-28 text-center" />
      </div>
      <div className="flex mt-8 gap-16">
        <img
          src={RuningPic}
          alt="Running-Person"
          className="w-[512px] h-[468px] rounded-xl"
        />

        <form className="text-white">
          <div className="flex flex-col">
            <label className="font-roboto text-xl" htmlFor="height">
              Gender
            </label>

            <select className="bg-white text-black rounded-2xl px-4 h-12 w-32  focus:outline-primary">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex  justify-between gap-8 ">
            <div className="flex flex-col my-8 gap-2 ">
              <label className="font-roboto text-xl" htmlFor="age">
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="20"
                className="bg-white text-black rounded-2xl py-2 px-4 h-12 focus:outline-primary"
              />
            </div>
            <div className="flex flex-col my-8 gap-2 ">
              <label
                className="font-roboto text-xl font-semibold"
                htmlFor="weight"
              >
                Weight
              </label>
              <input
                type="number"
                id="weight"
                name="weight"
                placeholder="20kg"
                className="bg-white text-black rounded-2xl py-2 px-4 h-12  focus:outline-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-8 ">
            <div className="flex flex-col my-8 gap-2 ">
              <label className="font-roboto text-xl" htmlFor="height">
                Height
              </label>
              <input
                type="number"
                id="height"
                name="height"
                placeholder="150cm"
                className="bg-white text-black rounded-2xl py-2 px-4 h-12  focus:outline-primary"
              />
            </div>
            <div className="flex justify-center items-center mt-10">
              <button className="bg-primary text-black rounded-2xl text-xl font-roboto  py-2 px-6">
                Calculate
              </button>
            </div>
          </div>
          <div className="bg-[#707070] border-2 border-primary flex justify-center rounded-xl py-4 px-6 items-center mt-8">
            <p className="text-white font-roboto text-xl">Result is </p> :
            <span className="text-primary"> _______________</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BMI;
