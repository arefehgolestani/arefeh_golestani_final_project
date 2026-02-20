import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import styles from "./LoginForm.module.css";

function ProductForm({ onSubmitForm, submitRef, defaultValues = {} }) {
  const validationSchema = Yup.object({
    mobile: Yup.string()
      .required("وارد کردن شماره موبایل الزامی می باشد!")
      .matches(/^09\d{9}$/, "شماره تماس باید ۱۱ رقمی و با 09 شروع شود"),
  });

  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      mobile: "",
      ...defaultValues,
    },
  });

  useEffect(() => {
    reset(defaultValues);
  }, []);

  const onSubmit = async (data) => {
    onSubmitForm(data);
    return data;
  };

  useEffect(() => {
    submitRef.current = async () => {
      const isValid = await trigger();
      if (!isValid) return null;

      const values = getValues();
      onSubmitForm(values);
      return values;
    };
  }, [trigger, getValues]);

  return (
    <div className={styles.modalForm}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>شماره موبایل خود را وارد کنید</label>
        <br />
        <input
          type="text"
          placeholder="4253****0912"
          {...register("mobile")}
          name="mobile"
        />
        <p className={styles.error}>{errors["mobile"]?.message}</p>
        
      </form>
    </div>
  );
}

export default ProductForm;
