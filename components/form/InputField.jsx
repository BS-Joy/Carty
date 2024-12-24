import React from "react";

const InputField = ({ label, name, type, placeholder, register }) => {
  const ph = placeholder || label;
  return (
    <div>
      <label
        htmlFor={name}
        className="text-gray-600 dark:text-gray-300 mb-2 block"
      >
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
        className="input_field"
        placeholder={ph}
      />
    </div>
  );
};

export default InputField;
