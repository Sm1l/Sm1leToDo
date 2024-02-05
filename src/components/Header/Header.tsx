import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import { ContainerMaxWidth } from "../ContainerMaxWidth";
import { ThemeButton } from "../ThemeButton";
import { useThemeStore, TTheme, setTheme } from "../../Store/ThemeStore";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const browserThemeIsDark: boolean = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    theme === "" && browserThemeIsDark && setTheme("blue");
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (newTheme: TTheme) => {
    if (theme !== newTheme) {
      setTheme(newTheme);
    }
  };

  return (
    <header className={styles.header}>
      <ContainerMaxWidth>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Sm1le ToDo</h1>
          <div className={styles.buttonsContainer}>
            <ThemeButton bgc="white" onClick={() => handleThemeChange("white")} />
            <ThemeButton bgc="blue" onClick={() => handleThemeChange("blue")} />
            <ThemeButton bgc="orange" onClick={() => handleThemeChange("orange")} />
          </div>
        </div>
      </ContainerMaxWidth>
    </header>
  );
};

export { Header };
