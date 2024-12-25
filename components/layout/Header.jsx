import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Search from "./Search";
import logo from "@/public/images/logo.png";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import NavCartWish from "./NavCartWish";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import Search2 from "./Search2";
import Search3 from "./Search3";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

const Header = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <header className="py-4 shadow-sm bg-white dark:bg-dark relative z-10">
      {/* mobile nav */}
      <MobileNav dictionary={dictionary} lang={lang} />

      <div className="flex container justify-between xl:gap-32 2xl:gap-52">
        <Logo lang={lang} />

        {/* desktop nav */}
        <div className="container hidden xl:flex items-center justify-between">
          {/* search */}
          <Suspense fallback={<p>loading...</p>}>
            {/* <Search dictionary={dictionary} /> */}
            <Search2 dictionary={dictionary} />
            {/* <Search3 dictionary={dictionary} /> */}
          </Suspense>

          {/* language switcher buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <LangSwitcher />
            <ThemeSwitcher />
            <NavCartWish dictionary={dictionary} lang={lang} />
          </div>
          {/* hamburger */}
        </div>
        <Hamburger />
      </div>

      {/* search bar */}
      <div className="flex justify-center xl:hidden w-full mt-4">
        <Suspense fallback={<p>loading...</p>}>
          {/* <Search dictionary={dictionary} /> */}
          <Search2 dictionary={dictionary} />
          {/* <Search3 dictionary={dictionary} /> */}
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
