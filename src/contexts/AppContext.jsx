"use client";
import { getItemFromLocalStorage } from "@/utils";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const user = getItemFromLocalStorage("user");
  const [userData, setUserData] = useState(user);


  return(
    <AppContext.Provider
      value={{
        userData,
        setUserData
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context
}

