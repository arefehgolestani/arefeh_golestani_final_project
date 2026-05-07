"use client";

import { useEffect, useState } from "react";

import { useContext } from "react";
import OtpInput from "react-otp-input";

import TourContext from "@/context/TourContext";

import styles from "./MobileCodeForm.module.css";

function MobileCodeForm({ sendOtpHandler }) {
  const { otp, setOtp } = useContext(TourContext);

  const [timeLeft, setTimeLeft] = useState(90);

  useEffect(() => {
    if (timeLeft === 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const resendHandler = () => {
    sendOtpHandler();
    setTimeLeft(90);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className={styles.input}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
      />

      {timeLeft > 0 ? (
        <p>
          <span className="vazirFont">
            {" "}
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>{" "}
          تا ارسال مجدد کد
        </p>
      ) : (
        <button onClick={resendHandler}>ارسال مجدد کد تایید</button>
      )}
    </div>
  );
}

export default MobileCodeForm;
