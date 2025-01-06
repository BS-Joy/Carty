import { getDictionary } from "@/app/dictionaries/dictionaries";
import LoginForm from "@/components/auth/LogInForm";
import OauthProviders from "@/components/auth/OauthProviders";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SigninPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex justify-center mt-16">
      <SignIn forceRedirectUrl={`/${lang}`} />
    </div>
    // <div className="container py-16">
    //   <div className="max-w-lg mx-auto shadow-md border dark:border-primary px-6 py-7 rounded-md overflow-hidden">
    //     <h2 className="text-2xl uppercase font-medium mb-1">
    //       {dictionary?.login}
    //     </h2>
    //     <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
    //       {dictionary?.login_welcome}
    //     </p>

    //     <LoginForm
    //       dictionary={dictionary}
    //       lang={lang}
    //       // productId={proId}
    //       // quantity={quantity}
    //     />

    //     {/* <!-- login with --> */}
    //     <div className="mt-6 flex justify-center items-center relative">
    //       <div className="w-full border-b-2 border-gray-200 dark:border-gray-600"></div>
    //       <p className="w-full text-gray-600 dark:text-gray-300 uppercase px-3 bg-white dark:bg-transparent z-10 relative">
    //         {dictionary?.or_login}
    //       </p>
    //       <div className="w-full border-b-2 border-gray-200 dark:border-gray-600"></div>
    //     </div>

    //     {/* external log in providers */}
    //     {/* <OauthProviders productId={proId} quantity={quantity} lang={lang} /> */}
    //     <OauthProviders lang={lang} />
    //     {/* <!-- ./login with --> */}

    //     <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
    //       {dictionary?.dont_have_account}{" "}
    //       <Link href={`/${lang}/sign-up`} className="text-primary">
    //         {dictionary?.register_now}
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};

export default SigninPage;
