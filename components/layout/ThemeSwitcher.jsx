"use client";
import { useEffect, useRef, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeSwitcher({ mobileNav }) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(resolvedTheme === "dark");

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="border-white h-5 w-5 animate-spin rounded-full border-2 border-t-black" />
    );
  }

  const handleTheme = (e) => {
    setIsDark(!isDark);
    if (isDark) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <>
      {/*      <!-- Component: Lg sized primary toggle button with toggle icon --> */}
      <label className="relative flex cursor-pointer flex-wrap items-center gap-2 text-slate-500">
        <input
          className="peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl bg-slate-300 transition-colors after:absolute after:left-0 after:top-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-gray-200 checked:after:left-6 checked:after:bg-gray-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-gray-300 checked:after:hover:bg-gray-600 focus:outline-none checked:focus:bg-gray-400 checked:after:focus:bg-gray-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
          type="checkbox"
          // value={isDark}
          checked={isDark}
          onChange={handleTheme}
        />
        <div
          className={`absolute left-[1.5px] ${
            mobileNav ? "top-[11px]" : "top-0.5"
          }  flex h-5 w-5 items-center justify-center text-white opacity-100 transition-opacity peer-checked:opacity-0`}
        >
          <IoSunny />
        </div>
        <div
          className={`absolute left-[1.625rem] ${
            mobileNav ? "top-3" : "top-0.5"
          }  flex h-5 w-5 items-center justify-center text-white opacity-0 transition-opacity  peer-checked:opacity-100`}
        >
          <BsMoonStarsFill size={".8rem"} />
        </div>
        {/* <span>With toggle icon</span> */}
      </label>
      {/*      <!-- End Lg sized primary toggle button with toggle icon --> */}
    </>
  );
}
