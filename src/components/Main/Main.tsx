import React from "react";

import styles from "./Main.module.scss";
import { ContainerMaxWidth } from "../ContainerMaxWidth";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <ContainerMaxWidth>{children}</ContainerMaxWidth>
    </main>
  );
};

export { Main };
