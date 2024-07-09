import React from "react";

import Barbell from "../assets/Barbell.png";
import weightPic from "../assets/Weighing.png";
import chart from "../assets/chart.png";

const Benifits = () => {
  return (
    <div className="bg-[#707070] relative bottom-14 flex justify-center gap-20 items-center w-[1024px] h-32 mx-auto rounded-2xl">
      <div className="flex gap-2 items-center justify-center border-r-4 border-primary h-full">
        <img src={Barbell} alt="quality-equipment" className="w-16 h-16" />
        <h3 className="text-white font-poetsen font-thin text-2xl leading-4 tracking-wider">
          Quality Equipment
        </h3>
      </div>
      <div className="flex gap-2 items-center justify-center border-r-4  border-primary h-full">
        <img src={weightPic} alt="weight-loss" className="w-16 h-16" />
        <h3 className="text-white font-poetsen font-thin text-2xl leading-4 tracking-wider">
          Weight Loss
        </h3>
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <img src={chart} alt="Diet-Chart" className="w-16 h-16" />
        <h3 className="text-white font-poetsen font-thin text-2xl leading-4 tracking-wider">
          Diet Charts
        </h3>
      </div>
    </div>
  );
};

export default Benifits;
