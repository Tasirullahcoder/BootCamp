import React from "react";
import person1 from "../assets/client-1.png";
import person2 from "../assets/client-2.png";
import star from "../assets/Star.png";

const Clients = () => {
  return (
    <section className="my-16 flex flex-col justify-center items-center">
      <div className="my-4 flex flex-col items-center ">
        <h2 className="text-4xl font-poetsen text-white">Client's Feedback</h2>
        <div className="border-b-4 border-primary mt-4 w-36 text-center" />
      </div>
      <div>
        {/* CLIENT 1 */}
        <div className="rlative flex w-full items-center my-16">
          <div className="absolute left-60">
            <img
              src={person1}
              alt="Client w-56 h-52 rounded-full border-8 border-primary"
              className="
            w-56 h-52 rounded-full border-8 border-primary"
            />
          </div>
          <div className=" bg-bg_primary w-full h-48 mx-auto  text-white rounded-full border-8 border-primary p-8 flex flex-col justify-center pl-80 pr-20">
            <h3 className="font-poetsen">MR JOHN</h3>
            <p className="my-2 font-roboto ">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>

        {/* CLIENT 2 */}
        <div className="rlative flex w-full items-center my-16">
          <div className=" bg-bg_primary w-full h-48 mx-auto  text-white rounded-full border-8 border-primary p-8 flex flex-col justify-center items-end pr-80 pl-20">
            <h3 className="font-poetsen">Uzair Khan</h3>
            <p className="my-2 font-roboto ">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>

          <div className="absolute right-60">
            <img
              src={person2}
              alt="Client w-56 h-52 rounded-full border-8 border-primary"
              className="
            w-56 h-52 rounded-full border-8 border-primary"
            />
          </div>
        </div>

        {/* CLIENT 3 */}
        <div className="rlative flex w-full items-center my-16">
          <div className="absolute left-60">
            <img
              src={person1}
              alt="Client w-56 h-52 rounded-full border-8 border-primary"
              className="
            w-56 h-52 rounded-full border-8 border-primary"
            />
          </div>
          <div className=" bg-bg_primary w-full h-48 mx-auto  text-white rounded-full border-8 border-primary p-8 flex flex-col justify-center pl-80 pr-20">
            <h3 className="font-poetsen">Uzair khan</h3>
            <p className="my-2 font-roboto ">
              This is Brilliant store i buy a treadmil from this store the
              results is marvellous
            </p>
            <div className="flex gap-4 justify-center items-center mt-4">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  gap-4">
        <div className="w-5 h-5 bg-bg_primary border-2 border-primary rounded-full" />
        <div className="w-5 h-5 bg-bg_primary border-2 border-primary rounded-full" />
        <div className="w-5 h-5 bg-primary border-2 border-primary rounded-full" />
        <div className="w-5 h-5 bg-bg_primary border-2 border-primary rounded-full" />
      </div>
    </section>
  );
};

export default Clients;
