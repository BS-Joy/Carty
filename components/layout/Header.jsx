// import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import Image from "next/image";
import Link from "next/link";
// import Search from "./Search";
// import LangSwitcher from "./LangSwitcher";
import { Suspense } from "react";
// import { auth } from "@/auth";
import Search from "./Search";
import logo from "@/public/images/logo.png";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import NavCartWish from "./NavCartWish";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

const Header = async ({ lang }) => {
  const dictionary = await getDictionary(lang);
  return (
    <header className="py-4 shadow-sm bg-white dark:bg-dark">
      <div className="container flex items-center justify-between">
        {/* logo */}
        <Logo lang={lang} />

        {/* search */}
        <Suspense fallback={<p>loading...</p>}>
          <Search dictionary={dictionary} />
        </Suspense>

        {/* user action buttons & links */}
        <div className="flex items-center space-x-4">
          {/* account link */}

          {/* language switcher buttons */}
          <LangSwitcher />
          <ThemeSwitcher />
          <NavCartWish dictionary={dictionary} lang={lang} />
        </div>
      </div>
    </header>
  );
};

export default Header;
