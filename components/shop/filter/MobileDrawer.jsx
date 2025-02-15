"use client";

import { Drawer } from "flowbite-react";
import { Suspense, useState } from "react";
import { IoIosOptions } from "react-icons/io";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
// import SizeFilter from "./SizeFilter";

const MobileDrawer = ({ category, allCategories, dictionary }) => {
  const selectedCategories = category && decodeURI(category).split("|");
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {/* mobile drawer toggle button */}
      <div className="text-center md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="hover:text-white text-primary bg-gray-100 hover:bg-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary dark:text-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block md:hidden"
          type="button"
        >
          <IoIosOptions size="1.5rem" />
        </button>
        {/* <Button color="blue">Hello</Button> */}
      </div>

      {/* sidebar */}
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Items>
          <div
            id="drawer-example"
            className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
              !isOpen && "-translate-x-full"
            } bg-white w-80 dark:bg-gray-800`}
            tabIndex="-1"
            aria-labelledby="drawer-label"
          >
            <h5
              id="drawer-label"
              className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
            >
              <svg
                className="w-5 h-5 mr-2"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Info
            </h5>
            <button
              onClick={handleClose}
              type="button"
              data-drawer-hide="drawer-example"
              aria-controls="drawer-example"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>
            <div className="divide-y divide-gray-200 space-y-5">
              {/* category filter */}
              <Suspense>
                <CategoryFilter
                  categories={allCategories}
                  dictionary={dictionary}
                />

                {/* price filter */}
                <PriceFilter dictionary={dictionary} />

                {/* size filter */}

                {/* <SizeFilter allCategories={allCategories} selectedCategories={selectedCategories} dictionary={dictionary}  /> */}
              </Suspense>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MobileDrawer;

{
  /* <div className="pt-4">
                <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                  size
                </h3>
                <div className="flex items-center gap-2">
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-xs"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-xs"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XS
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-sm"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-sm"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      S
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-m"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-m"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      M
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-l"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-l"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      L
                    </label>
                  </div>
                  <div className="size-selector">
                    <input
                      type="radio"
                      name="size"
                      id="size-xl"
                      className="hidden"
                    />
                    <label
                      htmlFor="size-xl"
                      className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                    >
                      XL
                    </label>
                  </div>
                </div>
              </div> */
}
