"use client";

import { getPriceRangeObj } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PriceFilter = ({ dictionary }) => {
  const [priceRange, setPriceRange] = useState({
    min: 0,
    max: 0,
  });

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setPriceRange({ ...priceRange, [name]: Number(value) });
  };

  // useEffect(() => {
  //   const paramsPriceRange = params.get("priceRange");
  //   if (paramsPriceRange) {
  //     const priceRangeObj = getPriceRangeObj(paramsPriceRange);
  //     setPriceRange(priceRangeObj);
  //   }
  // }, []);

  // useEffect(() => {
  //   const pageParams = params.get("page");
  //   if (priceRange.min !== 0) {
  //     if (pageParams) {
  //       params.set("page", 1);
  //     }
  //     params.set(
  //       "priceRange",
  //       encodeURI(`min=${priceRange.min}&max=${priceRange.max}`)
  //     );
  //   } else if (priceRange.max !== 0) {
  //     if (pageParams) {
  //       params.set("page", 1);
  //     }
  //     params.set(
  //       "priceRange",
  //       encodeURI(`min=${priceRange.min}&max=${priceRange.max}`)
  //     );
  //   } else {
  //     params.delete("priceRange");
  //     params.delete("page");
  //   }

  //   replace(`${pathName}?${params.toString()}`);
  // }, [priceRange]);

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 dark:text-gray-200 mb-3 uppercase font-medium">
          {dictionary?.price}
        </h3>
        {priceRange.min || priceRange.max ? (
          <button
            className="text-primary underline hover:text-red-400"
            onClick={() => {
              params.delete("priceRange");
              setPriceRange({ min: 0, max: 0 });
              params.set("page", 1);
            }}
          >
            reset
          </button>
        ) : (
          ""
        )}
      </div>

      {/* min price input box */}
      <div className="mt-4 flex items-center">
        <input
          type="text"
          name="min"
          id="min"
          onChange={handleChange}
          onMouseDown={() => {
            if (priceRange?.max === 0) {
              setPriceRange({ ...priceRange, max: 10000 });
            }
          }}
          onBlur={() => {
            if (priceRange?.min === 0 && priceRange?.max) {
              setPriceRange({ ...priceRange, max: 0 });
            }
          }}
          value={priceRange.min}
          className="w-full border-gray-300 dark:focus:border dark:focus:border-primary focus:border-primary rounded px-3 py-1 text-gray-600 dark:text-primary shadow-sm"
          placeholder="min"
        />
        <span className="mx-3 text-gray-500">-</span>
        <input
          type="text"
          name="max"
          id="max"
          onBlur={() => {
            if (priceRange?.min > 0 && priceRange?.max === 0) {
              setPriceRange({ ...priceRange, max: 10000 });
            }
          }}
          value={priceRange.max}
          onChange={handleChange}
          className="w-full border-gray-300 dark:focus:border dark:focus:border-primary focus:border-primary rounded px-3 py-1 text-gray-600 shadow-sm"
          placeholder="max"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
