"use client";

// import { login } from "@/app/actions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../loading/ButtonSpinner";
// import Spinner from "../loading/ButtonSpinner";

const LoginForm = ({ dictionary, lang, productId, quantity }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const response = await login(formData, lang);
    if (response?.error) {
      setLoading(false);
      setError(response?.error);
    } else {
      setLoading(false);
    }
  };
  return (
    <form method="post" onSubmit={handleSubmit} autoComplete="on">
      {error && (
        <p className="bg-red-200 text-center py-2 rounded mb-4 text-red-700">
          {error}
        </p>
      )}
      <div className="space-y-2">
        {/* email */}
        <div>
          <label
            htmlFor="email"
            className="text-gray-600 dark:text-gray-300 mb-2 block"
          >
            {dictionary?.email}
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            className="block w-full border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-600 dark:text-primary text-sm rounded focus:ring-0 focus:border-primary dark:focus:outline-none dark:focus:border dark:focus:border-primary placeholder-gray-400"
            placeholder="youremail.@domain.com"
          />
        </div>

        {/* password */}
        <div>
          <label
            htmlFor="password"
            className="text-gray-600 dark:text-gray-300 mb-2 block"
          >
            {dictionary?.password}
          </label>
          <input
            required
            type="password"
            name="password"
            id="password"
            className="block w-full border border-gray-300 dark:border-gray-500 px-4 py-3 text-gray-600 dark:text-primary text-sm rounded focus:ring-0 focus:border-primary dark:focus:outline-none dark:focus:border dark:focus:border-primary placeholder-gray-400"
            placeholder="*******"
          />
        </div>
      </div>

      {/* remember me checker */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="remember"
            className="text-gray-600 dark:text-gray-200 ml-3 cursor-pointer"
          >
            {dictionary?.remember_me}
          </label>
        </div>
        <Link href="#" className="text-primary">
          {dictionary?.forgot_password}?
        </Link>
      </div>

      {/* submit button */}
      <div className="mt-4">
        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-medium"
        >
          {loading ? (
            <>
              <Spinner /> <span>Logging in...</span>
            </>
          ) : (
            dictionary?.login
          )}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
