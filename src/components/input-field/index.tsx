import React, { InputHTMLAttributes } from "react";

import styles from "./style.module.scss";

interface InputFieldProps {
  pathToIcon: string;
}

export default function InputField(props: InputHTMLAttributes<InputFieldProps>) {
  return (
    <div className={styles.container}>
      {props.placeholder && (
        <label className={styles.placeholder}>
          {props.placeholder} {props.required && <span className={styles.required}>*</span>}
        </label>
      )}

      {props.type === "text" && <input type="text" className={styles.input} />}
    </div>
  );
}
