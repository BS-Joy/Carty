"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ProductQuantity = ({ dictionary, quantity, setQuantity, stock }) => {
  const [stockOut, setStockOut] = useState(false);
  const handleCount = (todo) => {
    if (todo === "de") {
      setQuantity((prevQuantity) => {
        if (prevQuantity === 1) {
          return 1;
        } else {
          return parseInt(prevQuantity - 1);
        }
      });
    } else if (todo === "in") {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  useEffect(() => {
    if (quantity === stock) {
      toast.error("You have reached the stock limit", {
        position: "bottom-center",
      });
      setStockOut(true);
    } else {
      setStockOut(false);
    }
  }, [quantity, stock]);

  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-800 dark:text-gray-200 uppercase mb-1">
        {dictionary?.quantity}
      </h3>
      <div className="flex border border-gray-300 dark:border-gray-400 rounded text-gray-600 divide-x divide-gray-300 w-max">
        <button
          onClick={() => handleCount("de")}
          disabled={parseInt(quantity) === 1}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-primary hover:text-white disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:text-gray-300"
        >
          -
        </button>
        <div className="h-8 w-8 text-base flex items-center justify-center">
          {parseInt(quantity)}
        </div>
        <button
          onClick={() => handleCount("in")}
          disabled={stockOut}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none hover:bg-primary hover:text-white disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:text-gray-300"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
