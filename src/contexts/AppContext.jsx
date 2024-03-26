"use client";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(window.localStorage && JSON.parse(window.localStorage.getItem('user')));

  const user = window.localStorage && window.localStorage.getItem('user');

  useEffect(() => {
    setUserData(JSON.parse(user))
  }, [user]);

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

