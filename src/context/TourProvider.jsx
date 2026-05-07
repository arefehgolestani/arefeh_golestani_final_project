"use client";

import { useEffect, useState } from "react";
import TourContext from "./TourContext.jsx";

function TourProvider({
  children,
  initialIsLoggedIn = false,
  initialIsAuthChecked = false,
}) {
  const [modal, setModal] = useState(null);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [isAuthChecked, setIsAuthChecked] = useState(initialIsAuthChecked);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      const fetchUserData = async () => {
        const response = await fetch("/api/proxy/user/profile");
        if (response.ok) {
          const data = await response.json();
          setUser(data);
        }
      };

      fetchUserData();
    }
  }, [isLoggedIn]);

  return (
    <TourContext.Provider
      value={{
        modal,
        setModal,
        mobile,
        setMobile,
        otp,
        setOtp,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        isAuthChecked,
        showSidebar,
        setShowSidebar,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export default TourProvider;
