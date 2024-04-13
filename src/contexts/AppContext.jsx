"use client";
import { Login, Register, Toast } from "@/components";
import { getItemFromLocalStorage } from "@/utils";
// import { getItemFromLocalStorage } from "@/utils";
import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext(undefined);

export const AppContextProvider = ({ children }) => {
  // type: "SUCCESS" | "ERROR"
  const [toast, setToast] = useState(undefined)
  const [userData, setUserData] = useState(() => getItemFromLocalStorage("user"));
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return(
    <AppContext.Provider
      value={{
        userData,
        setUserData,
        showToast: (toastMessage)  => {
          setToast(toastMessage)
        },
        openLogin,
        setOpenLogin,
        openRegister,
        setOpenRegister
      }}
    >
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(undefined)}
        />
      )}

      {
        openLogin && (
          <Login 
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
          />
        )
      }

      {
        openRegister && (
          <Register 
            openRegister={openRegister}
            setOpenRegister={setOpenRegister}
          />
        )
      }
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context
}

