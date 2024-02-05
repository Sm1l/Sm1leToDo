import React, { ButtonHTMLAttributes, useState, useEffect } from "react";

import styles from "./RoundButton.module.scss";

export interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "add" | "delete";
  handleClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ buttonType, handleClick, ...props }) => {
  const [text, setText] = useState<string>("");

  const itIsAddButton = () => {
    if (buttonType === "add") {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (itIsAddButton()) {
      setText("+");
    } else {
      setText("-");
    }
  }, []);

  const stopPropagationHandleClick = (e: React.MouseEvent, handleClick: () => void) => {
    e.stopPropagation();
    handleClick();
  };

  return (
    <button
      className={
        itIsAddButton() ? `${styles.roundButton} ${styles.addButton}` : `${styles.roundButton} ${styles.deleteButton}`
      }
      onClick={(e) => stopPropagationHandleClick(e, handleClick)}
      {...props}
    >
      {text}
    </button>
  );
};

export { RoundButton };
