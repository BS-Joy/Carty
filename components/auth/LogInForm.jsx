"use client";

// import { login } from "@/app/actions";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Spinner from "../loading/ButtonSpinner";
import MyButton from "../MyButton";
import InputField from "../form/InputField";
import { useForm } from "react-hook-form";
// import Spinner from "../loading/ButtonSpinner";

const LoginForm = ({ dictionary, lang, productId, quantity }) => {
  const { register } = useForm();
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
        <InputField
          label={dictionary?.email}
          name="email"
          type="email"
          placeholder="youremail.@domain.com"
          register={register}
        />

        {/* password */}
        <InputField
          label={dictionary?.password}
          name="password"
          type="password"
          placeholder="*******"
          register={register}
        />
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
        <MyButton type="submit" classNames="w-full uppercase">
          {loading ? (
            <>
              <Spinner /> <span>Logging in...</span>
            </>
          ) : (
            dictionary?.login
          )}
        </MyButton>
      </div>
    </form>
  );
};

export default LoginForm;
