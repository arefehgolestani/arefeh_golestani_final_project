"use client";

import { use, useState } from "react";

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
