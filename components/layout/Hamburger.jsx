"use client";

import { NavStateContext } from "@/contexts/MobileNavStateProvider";
import { useContext } from "react";

const Hamburger = () => {
  const { show, setShow } = useContext(NavStateContext);

  const handleMobileNav = () => {
    setShow(!show);
  };

  return (
    <label className="xl:hidden">
      <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
        <input
          className="hidden peer"
          type="checkbox"
          checked={show}
          onChange={handleMobileNav}
        />
        <div className="w-[50%] h-[2px] bg-black dark:bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
        <div className="w-[50%] h-[2px] bg-black dark:bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
        <div className="w-[50%] h-[2px] bg-black dark:bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
      </div>
    </label>
  );
};

export default Hamburger;
