import { CN } from "@/lib/cn";
import React from "react";

const MyButton = ({ children, classNames, ...props }) => {
  // console.log(props);
  return (
    <button
      className={CN(
        " bg-primary border border-primary text-white px-6 py-2 text-sm font-medium rounded-md hover:shadow-night-button my-transition",
        classNames
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
