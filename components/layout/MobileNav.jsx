import React, { Suspense } from "react";
import Search2 from "./Search2";
import LangSwitcher from "./LangSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import NavCartWish from "./NavCartWish";

const MobileNav = ({ dictionary, lang }) => {
  return (
    <div className="absolute bg-red-500 w-full top-[72px] flex flex-col gap-6 items-center py-8 lg:hidden">
      <Suspense fallback={<p>loading...</p>}>
        {/* <Search dictionary={dictionary} /> */}
        <Search2 dictionary={dictionary} />
        {/* <Search3 dictionary={dictionary} /> */}
      </Suspense>
      <LangSwitcher />
      <ThemeSwitcher />
      <NavCartWish dictionary={dictionary} lang={lang} />
    </div>
  );
};

export default MobileNav;
