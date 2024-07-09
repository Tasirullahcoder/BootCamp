import React from "react";
import bodyImage from "../assets/body.png";

const BuyNow = () => {
  return (
    <section className="relative flex justify-around px-20 w-[90%] mx-auto my-16 gap-10">
      <div className=" w-2/5 ">
        <img src={bodyImage} alt="body-building" className="h-96" />
        <div className="absolute bg-white p-6 text-black rounded-2xl bottom-8 right-2/4 ">
          <p className="font-roboto font-bold">Best Workout Machine</p>
        </div>
      </div>
      <div className=" flex flex-col   w-2/5 gap-6 px-20 py-10">
        <h2 className="font-poetsen text-white text-2xl">
          Get Ready to Reach <br />
          Your Fitness Goals
        </h2>
        <p className="text-gray-200">
          Combining aerobic exercise with other kinds of exercises like strength
          training with weights and stretching keeps <br /> muscles, ligaments,
          joints, and tendons healthy, flexible, and strong, so when one becomes
          older,
          <br />
          He is stronger and has less risk of being out of balance and falling
          causing fractures or other injuries
        </p>
      </div>
    </section>
  );
};

export default BuyNow;
