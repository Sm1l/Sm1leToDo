import React, { ButtonHTMLAttributes } from "react";

import styles from "./ThemeButton.module.scss";
import { TTheme } from "../../Store/ThemeStore";

interface ThemeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bgc: TTheme;
  onClick: () => void;
}

const ThemeButton: React.FC<ThemeButtonProps> = ({ bgc, onClick, ...props }) => {
  const setBackgroundColor = (bgc: TTheme) => {
    switch (bgc) {
      case "blue":
        return styles.themeButtonBlue;
        break;
      case "orange":
        return styles.themeButtonOrange;
        break;
      case "white":
        return styles.themeButtonWhite;
        break;

      default:
        return "";
    }
  };

  return <button className={`${styles.themeButton} ${setBackgroundColor(bgc)}`} onClick={onClick} {...props}></button>;
};

export { ThemeButton };
