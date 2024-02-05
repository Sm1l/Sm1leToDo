import React, { ButtonHTMLAttributes } from "react";

import styles from "./DeleteButton.module.scss";

interface DeleteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text?: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ text = "-", onClick, ...props }) => {
  const deleteHandleClick = (e: React.MouseEvent, onClick: () => void) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <button className={styles.deleteButton} onClick={(e) => deleteHandleClick(e, onClick)} {...props}>
      {text}
    </button>
  );
};

export { DeleteButton };
