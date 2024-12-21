"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CategoryFilter = ({ categories, dictionary }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const params = new URLSearchParams(searchParams);
  const paramsCategory = params.get("category");
  const initialCategory = paramsCategory
    ? decodeURI(paramsCategory).split("|")
    : [];
  const [query, setQuery] = useState(initialCategory);

  const handleChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const checked = e.target.checked;

    if (checked) {
      setQuery((prev) => [...prev, name]);
    } else {
      setQuery((prev) => prev.filter((item) => item !== name));
    }
  };

  useEffect(() => {
    if (paramsCategory) {
      const category = decodeURI(paramsCategory).split("|");
      setQuery(category);
    } else {
      setQuery([]);
    }
  }, [paramsCategory]);

  useEffect(() => {
    const pageParams = params.get("page");
    if (query.length > 0) {
      if (pageParams) {
        params.set("page", 1);
      }
      params.set("category", encodeURI(query.join("|")));
    } else {
      params.delete("category");
      params.delete("page");
    }
    replace(`${pathName}?${params.toString()}`);
  }, [query]);

  return (
    <div>
      <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
        {dictionary?.categories}
      </h3>
      {categories ? (
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={query.includes(category.category_code)}
                name={category.category_code}
                id={category.category_code}
                onChange={handleChange}
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor={category.category_code}
                className="text-gray-600 ml-3 cursor-pointer"
              >
                {category.category_name}
              </label>
              <span className="ml-auto text-gray-600 text-sm">
                ({category.total_products})
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-400">Sorry! No Categories.</p>
      )}
    </div>
  );
};

export default CategoryFilter;
