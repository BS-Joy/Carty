"use client";
import { useContext } from "react";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import NavCartWish from "./NavCartWish";
import { NavStateContext } from "@/contexts/MobileNavStateProvider";
import Link from "next/link";

const MobileNav = ({ dictionary, lang }) => {
  const { show, setShow } = useContext(NavStateContext);
  return (
    <div
      className={`absolute bg-white dark:bg-slate-700 border dark:border-none w-full top-[124px] flex flex-col gap-6 items-center shadow-md py-8 xl:hidden  ${
        show ? "translate-x-0" : "-translate-x-full"
      } my-transition`}
    >
      <div className="flex justify-between w-full px-7 pr-10">
        <LangSwitcher mobileNav={true} />
        <ThemeSwitcher mobileNav={true} />
        <NavCartWish dictionary={dictionary} lang={lang} />
      </div>
      <div className="flex items-center space-x-6 capitalize">
        <Link
          href={`/${lang}`}
          className="text-dark dark:text-primary hover:text-primary dark:hover:text-orange-300 my-transition"
        >
          {dictionary?.home}
        </Link>
        <Link
          href={`/${lang}/shop`}
          className="text-dark dark:text-primary hover:text-primary dark:hover:text-orange-300 my-transition"
        >
          {dictionary?.shop}
        </Link>
        <Link
          href={`/${lang}/about-us`}
          className="text-dark dark:text-primary hover:text-primary dark:hover:text-orange-300 my-transition"
        >
          {dictionary?.about_us}
        </Link>
        <Link
          href={`/${lang}/contact-us`}
          className="text-dark dark:text-primary hover:text-primary dark:hover:text-orange-300 my-transition"
        >
          {dictionary?.contact_us}
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
