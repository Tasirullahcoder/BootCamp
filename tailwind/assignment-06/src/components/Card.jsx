import React from 'react'

const Card = ({ children }) => {
  return (
    <section className=" my-48 w-[1149px] h-[395px] left-36  gap-20 flex flex-col  items-center  mx-auto text-[#E2E8F0]">
      <h1 className="text-3xl font-semibold">Select Your Card</h1>
      <div className="flex flex-wrap justify-center items-center ">
        {children}
      </div>
      <button
        type="button"
        className="w-50 h-12 rounded-md  font-bold bg-[#A12DC7]  mx-auto text-[#E2E8F0] py-[18] px-[28px] "
      >
        Next
      </button>
    </section>
  )
}

export default Card
