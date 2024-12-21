import { getDictionary } from "@/app/dictionaries/dictionaries";
import OauthProviders from "@/components/auth/OauthProviders";
import RegisterForm from "@/components/auth/RegisterForm";
import { SignUp } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignupPage = async ({ params }) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <div className="contain py-16">
      <div className="max-w-lg mx-auto px-6 py-7 rounded overflow-hidden shadow-md shadow-orange-200">
        <h2 className="text-2xl uppercase font-medium mb-1">
          {dictionary.create_new_account}
        </h2>
        <p className="text-gray-600 mb-6 text-sm">{dictionary.new_register}</p>
        <RegisterForm dictionary={dictionary} lang={lang} />

        {/* <!-- login with --> */}
        <div className="mt-6 flex justify-center relative">
          <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">
            {dictionary.or_register}
          </div>
          <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
        </div>
        <OauthProviders />
        {/* <!-- ./login with --> */}

        <p className="mt-4 text-center text-gray-600">
          {dictionary.already_have_account}{" "}
          <Link href={`/${lang}/sign-in`} className="text-primary">
            {dictionary.login_now}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
