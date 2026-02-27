import styles from "./FormInput.module.css";

function FormInput({ name, placeholder, type, value, onChange }) {
  return (
    <div className={styles.formInput}>
      <input type={type} id={name} value={value} name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
