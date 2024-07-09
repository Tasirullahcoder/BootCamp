import React from 'react'
import Avatar from './Avatar'

const Navbar = () => {
  return (
    <nav className="h-24 px-6 justify-between items-center flex border  border-[#E2E8F0] border-solid mx-auto text-[#E2E8F0]">
      <div className="new-rocker-regular">
        <p className="text-2xl">Webpage</p>
      </div>
      <ul className="flex flex-row  items-center gap-8">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Blog</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
        <li className="cursor-pointer">Support</li>
      </ul>
      <Avatar />
    </nav>
  )
}

export default Navbar
