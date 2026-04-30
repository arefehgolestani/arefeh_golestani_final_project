"use client";

import { useEffect, useState } from "react";
import TourContext from "./TourContext.jsx";

function TourProvider({ children }) {
  const [modal, setModal] = useState(null);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [user, setUser] = useState(null);
  // const [user, setUser] = useState({
  //   mobile: "",
  //   email: "",
  //   firstName: "",
  //   lastName: "",
  //   gender: "",
  //   birthDate: "",
  //   nationalCode: "",
  //   payment: {
  //     shaba_code: "",
  //     debitCard_code: "",
  //     accountIdentifier: "",
  //   },
  // });

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  // useEffect(() => {
  //   const checkLogin = async () => {
  //     try {
  //       const res = await fetch("/api/auth/user", {
  //         cache: "no-store",
  //       });

  //       const data = await res.json();

  //       if (res.ok && data.user) {
  //         setUser(data.user);
  //         setIsLoggedIn(true);
  //       }
  //     } catch (error) {
  //       console.log("Not logged in");
  //     } finally {
  //       setIsAuthChecked(true);
  //     }
  //   };

  //   checkLogin();
  // }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const res = await fetch("/api/proxy/user/profile", {
          cache: "no-store",
          credentials: "include",
        });

        const data = await res.json();

        if (res.ok && data) {
          setUser(data);
          setIsLoggedIn(true);
        } else {
          setUser(null);
          setIsLoggedIn(false);
        }
      } catch (error) {
        setUser(null);
        setIsLoggedIn(false);
      } finally {
        setIsAuthChecked(true);
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
