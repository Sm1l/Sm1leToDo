import React, { ButtonHTMLAttributes } from "react";

import styles from "./AddButton.module.scss";

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  setAddNewToDoIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text = "+", setAddNewToDoIsActive, ...props }) => {
  const addHandleClick = (
    e: React.MouseEvent,
    setAddNewToDoIsActive: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.stopPropagation();
    setAddNewToDoIsActive((prev) => !prev);
  };

  return (
    <button className={styles.addButton} onClick={(e) => addHandleClick(e, setAddNewToDoIsActive)} {...props}>
      {text}
    </button>
  );
};

export { AddButton };
