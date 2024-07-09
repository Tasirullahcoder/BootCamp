import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="relative w-72 h-9  top-51 ">
      <div className="w-full h-full rounded-lg">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-full text-primary rounded-2xl focus:outline-primary bg-gray-200 bg-opacity-30 p-2  placeholder:text-gray-200 outline-none"
        />
        {/* Search Icon */}
        <div className="absolute inset-y-0 right-0 text-3xl flex items-center pr-3 text-primary">
          <CiSearch />
        </div>
      </div>
    </div>
  );
};

export default Search;
