"use client";

import { createContext, useState } from "react";

export const NavStateContext = createContext();

const MobileNavStateProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <NavStateContext.Provider value={{ show, setShow }}>
      {children}
    </NavStateContext.Provider>
  );
};

export default MobileNavStateProvider;
