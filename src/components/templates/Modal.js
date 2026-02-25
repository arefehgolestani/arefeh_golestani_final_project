"use client"

import Image from "next/image";

import styles from "./Modal.module.css";

function Modal({
  title,
  children,
  message,
  confirmText = "تأیید",
  mode,
  onConfirm,
  onCancel,
  onBack,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.modal_content}>
        { (mode === "login" || mode === "logout") && (
            <span className={styles.close} onClick={onCancel}>
              <Image
                src="/images/add.png"
                width={30}
                height={30}
                alt="modal close"
              />
            </span>
          )}

        {mode === "otpCode" && (
          <span className={styles.close} onClick={onBack}>
            <Image
              src="/images/Line-arrow-left.png"
              width={24}
              height={24}
              alt="modal close"
            />
          </span>
        )}

        <h3>{title}</h3>
        <h4>{message}</h4>

        {mode !== "logout" && <>{children}</>}

        <div className={styles.buttons}>
          <button className="success" type="button" onClick={onConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
