import React, { useEffect } from "react";

import styles from "./Header.module.scss";
import { ContainerMaxWidth } from "../ContainerMaxWidth";
import { ThemeButton } from "../ThemeButton";
import { useThemeStore, TTheme, setTheme } from "../../Store/ThemeStore";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const browserThemeIsDark: boolean = window?.matchMedia("(prefers-color-scheme: dark)").matches;

  const theme = useThemeStore((state) => state.theme);
  const msapplication: Element | null = document.querySelector('meta[name="msapplication-TileColor"]');
  const themeColor = document.querySelector('meta[name="theme-color"]');

  useEffect(() => {
    theme === "" && browserThemeIsDark && setTheme("blue");
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);

    if (theme === "orange") {
      msapplication?.setAttribute("content", "#0c0c5d");
      themeColor?.setAttribute("content", "#0c0c5d");
    } else if (theme === "blue") {
      msapplication?.setAttribute("content", "#e67847");
      themeColor?.setAttribute("content", "#e67847");
    } else if (theme === "white") {
      msapplication?.setAttribute("content", "#b9b9b9");
      themeColor?.setAttribute("content", "#b9b9b9");
    } else if (theme === "dark") {
      msapplication?.setAttribute("content", "#21242a");
      themeColor?.setAttribute("content", "#21242a");
    }
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
          <h1 className={styles.title}>Sm1le List</h1>
          <div className={styles.buttonsContainer}>
            <ThemeButton bgc="white" onClick={() => handleThemeChange("white")} />
            <ThemeButton bgc="dark" onClick={() => handleThemeChange("dark")} />
            <ThemeButton bgc="blue" onClick={() => handleThemeChange("blue")} />
            <ThemeButton bgc="orange" onClick={() => handleThemeChange("orange")} />
          </div>
        </div>
      </ContainerMaxWidth>
    </header>
  );
};

export { Header };
