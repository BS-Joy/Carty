import React from "react";

const Search3 = () => {
  return (
    <div class="relative w-[480px] bg-gray-100 dark:bg-gray-800 dark:border dark:border-white border border-primary dark:hover:border-primary rounded shadow-md px-1.5 transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
      <div class="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
        <svg
          class="h-5 w-5 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        class="w-full pl-8 pr-24 py-3 text-base text-gray-700 dark:text-primary bg-transparent rounded-lg focus:outline-none"
        placeholder="Search for components, styles, creators..."
      />
      <button class="absolute right-1 top-1 bottom-1 px-6 bg-primary text-white font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:hover:shadow-night-button">
        Search
      </button>
    </div>
  );
};

export default Search3;
