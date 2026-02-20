"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

import TourContext from "@/context/TourContext";
import Modal from "../templates/Modal";
import LoginForm from "../modules/LoginForm";
import MobileCodeForm from "./MobileCodeForm";
import DropdownButton from "./DropdownButton"
import api from "@/services/config";
import { sendOtp, checkOtp } from "@/services/EndpointApi";

import styles from "./Header.module.css";
import { useRouter } from "next/navigation";

function Header() {
  const {
    modal,
    setModal,
    mobile,
    setMobile,
    otp,
    setOtp,
    isLoggedIn,
    setIsLoggedIn,
  } = useContext(TourContext);

  const notify = (code) => toast(`کد تایید شما : ${code}`);

  const modalHandler = () => {
    setModal({
      title: "ورود به تورینو",
      mode: "login",
      children: <LoginForm onSubmitForm={onSubmitForm} submitRef={submitRef} />,
      confirmText: "ارسال کد تایید",
    });
  };

  const submitRef = useRef(null);

  const onSubmitForm = (data) => {
    setMobile(data.mobile);
  };

  const sendOtpHandler = async () => {
    try {
      const result = await submitRef.current();
      if (!result) return;

      const res = await api.post(sendOtp, result);
      const code = res.data.code;

      setModal({
        title: "کد تایید را وارد کنید",
        message: `کد تایید به شماره ${result.mobile} ارسال شد.`,
        mode: "otpCode",
        children: <MobileCodeForm />,
        confirmText: "ورود به تورینو",
        cancelText: "انصراف",
        onBack: modalBackHandler,
      });
      notify(code);
    } catch (error) {
      console.log(error);
    }
  };

  const checkOtpHandler = async () => {
    if (!otp) {
      toast.error("کد تایید وارد نشده است!");
      return;
    }

    try {
      const res = await api.post(checkOtp, {
        mobile,
        code: otp,
      });

      if (res.status === 200) {
        setModal(null);
        toast.success("ورود به تورینو با موفقیت انجام شد.");
        setIsLoggedIn(true);
        console.log(res.data.accessToken);
        console.log(res.data.refreshToken);
        console.log(res.data.user);
      }
    } catch (error) {
      const message = error.response?.data?.message;
      toast.error(message || "خطایی رخ داد");
      setOtp("");
    }
  };

  const confirmHandler = async () => {
    if (modal?.mode === "login") {
      await sendOtpHandler();
    }

    if (modal?.mode === "otpCode") {
      await checkOtpHandler();
    }
  };

  const modalBackHandler = () => {
    setModal({
      title: "ورود به تورینو",
      mode: "login",
      children: <LoginForm onSubmitForm={onSubmitForm} submitRef={submitRef} />,
      confirmText: "ارسال کد تایید",
    });
  };

  return (
    <div className={styles.mainHeader}>
      <div>
        <ToastContainer autoClose={7000} />
      </div>
      <div className={styles.container}>
        <div>
          <Image
            src="/images/logo.png"
            width={146}
            height={44}
            alt="torino logo"
          />
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={styles.active}>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>خدمات گردشگری</li>
            <li>درباره ما</li>
            <li>تماس با ما</li>
          </ul>
        </div>
        <div className={styles.loginButton}>
          {!isLoggedIn && (
            <button onClick={modalHandler}>
              <Image
                src="/images/profile.png"
                width={24}
                height={24}
                alt="login icon"
              />
              <span>ورود | ثبت نام</span>
            </button>
          )}
          {isLoggedIn && <DropdownButton /> }
        </div>
      </div>

      {modal && (
        <Modal
          title={modal.title}
          mode={modal.mode}
          message={modal.message}
          confirmText={modal.confirmText}
          cancelText={modal.cancelText}
          onConfirm={confirmHandler}
          onBack={modal.onBack}
          onCancel={() => setModal(null)}
        >
          {modal.children}
        </Modal>
      )}
    </div>
  );
}

export default Header;
