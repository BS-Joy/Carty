import React from "react";

const InputField = ({ label, name, type, placeholder, register }) => {
  const ph = placeholder || label;
  return (
    <div>
      <label htmlFor={name} className="text-gray-600 mb-2 block">
        {label}
      </label>
      <input
        {...register(name, {
          required: "Can't be empty",
        })}
        // required
        type={type}
        name={name}
        id={name}
        className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
        placeholder={ph}
      />
    </div>
  );
};

export default InputField;
