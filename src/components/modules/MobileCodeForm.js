import { useContext } from "react";
import OtpInput from "react-otp-input";

import TourContext from "@/context/TourContext";

import styles from "./MobileCodeForm.module.css";

function MobileCodeForm() {
  const { otp, setOtp } = useContext(TourContext);

  return (
    <div className={styles.input}>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span></span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
}

export default MobileCodeForm;
