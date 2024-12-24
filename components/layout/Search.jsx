"use client";

import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = ({ dictionary }) => {
  // console.log(dictionary);
  const [query, setQuery] = useState("");

  //   const searchParams = useSearchParams();
  //   const pathName = usePathname();
  //   const { replace } = useRouter();

  //   const params = new URLSearchParams(searchParams);

  const handleChange = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery) {
      setQuery(searchQuery);
    } else {
      params.delete("search");
      setQuery("");
      replace(`${pathName}`);
    }
  };

  //   useEffect(() => {
  //     if (!pathName.includes("shop")) {
  //       setQuery("");
  //     }
  //   }, [pathName]);

  //   useEffect(() => {
  //     if (query) {
  //       params.set("search", query);
  //       const objectIdPattern = /[0-9a-fA-F]{24}/; //regex for monogdb objectId
  //       if (objectIdPattern.test(pathName)) {
  //         const othersPathName = pathName.slice(3);
  //         replace(`${pathName.replace(othersPathName, "")}/shop?${params}`);
  //       } else if (pathName.includes("shop")) {
  //         replace(`${pathName}?${params}`);
  //       } else if (!pathName.includes("shop")) {
  //         const othersPathName = pathName.slice(3);
  //         replace(`${pathName.replace(othersPathName, "")}/shop?${params}`);
  //       }
  //     } else {
  //       params.delete("search");
  //     }
  //   }, [query]);

  return (
    <div className="w-full max-w-xl relative flex">
      <span className="absolute left-4 top-4 text-lg text-gray-400">
        <FaMagnifyingGlass color="#FF8000" />
      </span>
      <input
        onChange={handleChange}
        type="text"
        name="search"
        id="search"
        // value={query}
        className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none dark:bg-black"
        placeholder={dictionary?.search}
      />
      <button className="bg-primary dark:hover:bg-orange-500 dark:hover:text-black border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary my-transition">
        {dictionary?.search}
      </button>
    </div>
  );
};

export default Search;
