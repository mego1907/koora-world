"use client";
import { getItemFromLocalStorage } from "@/utils";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  // const [userData, setUserData] = useState(localStorage && JSON.parse(localStorage.getItem('user')));
  const [userData, setUserData] = useState(getItemFromLocalStorage("user"));

  // const user = localStorage && localStorage.getItem('user');
  const user = getItemFromLocalStorage("user");



  return(
    <AppContext.Provider
      value={{
        userData: userData,
        setUserData: setUserData
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

