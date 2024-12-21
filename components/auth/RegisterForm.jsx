"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Spinner from "../loading/ButtonSpinner";
import InputField from "../form/InputField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First Name must be at least 2 characters",
    }),
    lastName: z.string().min(3, {
      message: "Last Name must be at least 3 characters",
    }),
    email: z
      .string()
      .min(12, {
        message: "email must be at least 12 characters.",
      })
      .email({ message: "Invalid email address." }),
    password: z
      .string()
      .min(8)
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
    confirmPassword: z
      .string()
      .min(8)
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter.",
      })
      .regex(/[0-9]/, {
        message: "Password must contain at least one number.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password didn't match",
    path: ["confirmPassword"],
  });

const RegisterForm = ({ dictionary, lang }) => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    // setError,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [passMatchError, setPassMatchError] = useState(null);
  const router = useRouter();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     setLoading(true);
  //     const formData = new FormData(e.target);
  //     const data = Object.fromEntries(formData.entries());

  //     const res = await fetch("/api/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (res.status === 201) {
  //       setLoading(false);
  //       router.push(`/${lang}/login`);
  //     } else if (res.status === 403) {
  //       const response = await res.text();
  //       setLoading(false);
  //       setError(response);
  //     }
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      {error && (
        <p className="bg-red-200 text-center py-2 rounded mb-4 text-red-700">
          {error}
        </p>
      )}
      <div className="space-y-2">
        {/* first name */}
        <InputField
          label={dictionary?.first_name}
          name={"firstName"}
          type={"text"}
          register={register}
        />

        {/* last name */}
        <InputField
          label={dictionary?.last_name}
          name={"lastName"}
          type={"text"}
          register={register}
        />

        {/* email */}
        <InputField
          label={dictionary?.email}
          name={"email"}
          type={"email"}
          placeholder={"youremail@domain.com"}
          register={register}
        />

        {/* password */}

        <InputField
          label={dictionary.password}
          name={"password"}
          placeholder="*********"
          register={register}
          type="password"
        />
        {/* {passLengthhError && (
          <p className="text-sm rounded mb-4 text-red-700">
            {passLengthhError}
          </p>
        )} */}

        {/* confirm password */}

        <InputField
          label={dictionary.confirm_password}
          name={"confirmPassword"}
          placeholder={"Confirm Password"}
          type={"password"}
          register={register}
        />
      </div>

      {/* agreement check box */}
      {/* <div className="mt-6">
        <div className="flex items-center">
          <input
            required
            type="checkbox"
            name="aggrement"
            id="aggrement"
            className="text-primary focus:ring-0 rounded-sm cursor-pointer"
          />
          <label
            htmlFor="aggrement"
            className="text-gray-600 ml-3 cursor-pointer"
          >
            {dictionary.have_agree}{" "}
            <Link href="#" className="text-primary">
              {dictionary.terms_condition}
            </Link>
          </label>
        </div>
      </div> */}

      {/* submit button */}
      <div className="mt-4">
        <button
          type="submit"
          className="flex justify-center items-center gap-2 w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
        >
          {loading ? (
            <>
              <Spinner /> <span>Signing up...</span>
            </>
          ) : (
            dictionary.create_new_account
          )}
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
