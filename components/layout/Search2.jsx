import React from "react";

const Search2 = () => {
  return (
    <div className="w-full max-w-xl relative flex px-6">
      <input
        className="w-full bg-zinc-200 text-zinc-600 ring-1 ring-zinc-400 focus:ring-2 focus:ring-primary outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-md px-4 py-[6px] shadow-md focus:shadow-lg focus:shadow-primary  shadow-[#1167A4]"
        autoComplete="off"
        placeholder="Search here..."
        name="text"
        type="text"
      />
      <button className="bg-primary px-4 rounded-md ml-3 text-white hover:shadow-night-button my-transition">
        Search
      </button>
    </div>
  );
};

export default Search2;
