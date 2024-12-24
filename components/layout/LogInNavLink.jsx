"use client";

import { useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FiLogOut } from "react-icons/fi";

const LoginNavLink = ({ lang, loginText, session }) => {
  const pathName = usePathname();
  const isLoginPage = pathName.includes("login");

  const { signOut } = useClerk();

  const handleLogout = async () => {
    signOut({ redirectUrl: `/${lang}/sign-in` });
  };

  return (
    <>
      {session ? (
        <button
          onClick={handleLogout}
          className={`text-gray-200 hover:text-white my-transition flex gap-1 items-center`}
        >
          <FiLogOut />
          Log Out
        </button>
      ) : (
        <Link
          href={`/${lang}/sign-in`}
          className={`text-gray-200 hover:text-white transition ${
            isLoginPage && "hidden"
          }`}
        >
          {loginText}
        </Link>
      )}
    </>
  );
};

export default LoginNavLink;
