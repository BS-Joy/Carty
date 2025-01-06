"use client";
import Link from "next/link";
import Dropdown from "./Dropdown";
// import { getAllCategories } from "@/db/queries";
import { Suspense } from "react";
import { FaBars } from "react-icons/fa6";
import LoginNavLink from "./LogInNavLink";
import { FaRegUser } from "react-icons/fa6";
import { useAuth } from "@clerk/nextjs";

const Navbar = ({ dictionary, lang, categories }) => {
  //   const categories = await getAllCategories();
  const { userId } = useAuth();
  return (
    <nav className="bg-dark dark:bg-primary hidden lg:block">
      <div className="container flex">
        <div className="px-8 py-4 bg-primary dark:bg-dark dark:border-y dark:border-y-primary flex items-center cursor-pointer relative group text-white dark:hover:text-primary my-transition">
          <FaBars />
          <span className="capitalize ml-2">{dictionary?.all_categories}</span>

          {/* <!-- dropdown --> */}
          <Suspense>
            <Dropdown categories={categories} />
          </Suspense>
        </div>

        <div className="flex items-center justify-between flex-grow pl-12">
          <div className="flex items-center space-x-6 capitalize">
            <Link
              href={`/${lang}`}
              className="text-gray-200 hover:text-white transition"
            >
              {dictionary?.home}
            </Link>
            <Link
              href={`/${lang}/shop`}
              className="text-gray-200 hover:text-white transition"
            >
              {dictionary?.shop}
            </Link>
            <Link
              href={`/${lang}/about-us`}
              className="text-gray-200 hover:text-white transition"
            >
              {dictionary?.about_us}
            </Link>
            <Link
              href={`/${lang}/contact-us`}
              className="text-gray-200 hover:text-white transition"
            >
              {dictionary?.contact_us}
            </Link>
          </div>

          {/* user links */}
          <div className="flex items-center text-white gap-4">
            {userId && (
              <Link
                href={`/${lang}/user-profile`}
                className="text-center text-gray-200 hover:text-white transition relative duration-500 flex gap-1 items-center"
              >
                <FaRegUser />
                <p className="text-gray-200 hover:text-white transition">
                  {dictionary?.account}
                </p>
              </Link>
            )}
            <LoginNavLink
              lang={lang}
              loginText={dictionary?.login}
              session={userId}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
