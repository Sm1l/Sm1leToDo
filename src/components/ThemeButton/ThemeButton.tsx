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
      case "orange":
        return styles.themeButtonOrange;
      case "white":
        return styles.themeButtonWhite;
      case "dark":
        return styles.themeButtonDark;

      default:
        return "";
    }
  };

  return <button className={`${styles.themeButton} ${setBackgroundColor(bgc)}`} onClick={onClick} {...props}></button>;
};

export { ThemeButton };
