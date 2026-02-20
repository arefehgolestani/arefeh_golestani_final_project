"use client";

import { useEffect, useState } from "react";

import TourContext from "./TourContext.jsx";

function TourProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/auth/user");
        const data = await res.json();

        if (res.ok && data.user) {
          setUser(data.user);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log("Not logged in");
      }
    };

    checkLogin();
  }, []);

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
      }}
    >
      {children}
    </TourContext.Provider>
  );
}

export default TourProvider;
