import React, { ButtonHTMLAttributes, useState, useEffect } from "react";

import styles from "./RoundButton.module.scss";

type TButton = "add" | "delete" | "reorder";

export interface RoundButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: TButton;
  handleClick: () => void;
}

const RoundButton: React.FC<RoundButtonProps> = ({ buttonType, handleClick, ...props }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    if (buttonType === "add") {
      setText("+");
    } else if (buttonType === "delete") {
      setText("-");
    } else if (buttonType === "reorder") {
      setText("↔");
    }
  }, []);

  const setButtonClassName = (buttonType: TButton) => {
    switch (buttonType) {
      case "add":
        return `${styles.roundButton} ${styles.addButton}`;

      case "delete":
        return `${styles.roundButton} ${styles.deleteButton}`;

      case "reorder":
        return `${styles.roundButton} ${styles.reorderButton}`;
      default:
        return "";
    }
  };

  const stopPropagationHandleClick = (e: React.MouseEvent, handleClick: () => void) => {
    e.stopPropagation();
    handleClick();
  };

  return (
    <button
      className={
        setButtonClassName(buttonType)
        // itIsAddButton() ? `${styles.roundButton} ${styles.addButton}` : `${styles.roundButton} ${styles.deleteButton}`
      }
      onClick={(e) => stopPropagationHandleClick(e, handleClick)}
      {...props}
    >
      {text}
    </button>
  );
};

export { RoundButton };
