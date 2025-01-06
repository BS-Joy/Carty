"use client";
import { getAllSizes } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SizeFilter = ({ allCategories, selectedCategories, dictionary }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const categories = selectedCategories
    ? allCategories.filter((category) =>
        selectedCategories.includes(category.category_code)
      )
    : [];
  const allSizes = getAllSizes(categories);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSelectedSize(value);
  };

  // useEffect(() => {
  //   const sizeParams = params.get("size");
  //   if (sizeParams) {
  //     const size = sizeParams.split("_").join(" ");
  //     setSelectedSize(size);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (selectedSize && selectedCategories?.length > 0) {
  //     params.set("size", selectedSize.split(" ").join("_"));
  //   } else {
  //     params.delete("size");
  //   }

  //   replace(`${pathName}?${params.toString()}`);
  // }, [selectedSize, selectedCategories]);

  return (
    <div className="pt-4">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800 dark:text-gray-200 mb-3 uppercase font-medium">
          {dictionary?.size}
        </h3>
        {selectedSize && (
          <button
            className="text-primary underline hover:text-red-400"
            onClick={() => {
              params.delete("size");
              setSelectedSize("");
            }}
          >
            reset
          </button>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {allSizes?.length > 0 ? (
          allSizes?.map((sizeObj, index) => (
            <div key={index}>
              <p className="text-xs underline mb-1">{sizeObj.category_name}</p>
              {sizeObj?.sizes?.map((size, index) => (
                <div key={index} className="size-selector flex mb-1">
                  <input
                    type="radio"
                    name="size"
                    id={size}
                    value={size}
                    onChange={handleChange}
                    checked={selectedSize === size}
                    className="hidden"
                  />
                  <label
                    htmlFor={size}
                    className="text-sm border border-gray-200 rounded-sm h-6 w-full px-5 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    {size}
                  </label>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>{dictionary?.size_msg}</p>
        )}
      </div>
    </div>
  );
};

export default SizeFilter;
