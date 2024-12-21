"use client";
// import { signIn } from 'next-auth/react';

const OauthProviders = ({ productId, quantity, lang }) => {
  const handleAuth = (provider) => {
    // signIn(provider, {callbackUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/account`})
  };
  return (
    <div className="mt-4 flex gap-4">
      <button
        onClick={() => handleAuth("facebook")}
        className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700"
      >
        Facebook
      </button>
      <button
        onClick={() => handleAuth("google")}
        className="w-1/2 py-2 text-center text-white bg-red-600 rounded uppercase font-roboto font-medium text-sm hover:bg-red-500"
      >
        google
      </button>
    </div>
  );
};

export default OauthProviders;
