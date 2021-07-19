import React, { ChangeEvent, InputHTMLAttributes } from "react";

import styles from "./style.module.scss";

interface InputFieldProps extends HTMLInputElement {
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

      {props.type === "text" && (
        <input
          type="text"
          className={styles.input}
          value={props.value}
          onChange={(e: ChangeEvent<InputFieldProps>) => {
            props.onChange(e);
          }}
        />
      )}
    </div>
  );
}
