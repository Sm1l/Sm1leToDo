import React, { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({ text, type, ...props }) => {
  return (
    <button className={styles.button} type={type} {...props}>
      {text}
    </button>
  );
};

export { Button };
