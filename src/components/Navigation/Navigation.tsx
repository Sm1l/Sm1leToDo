import React from "react";

import styles from "./Navigation.module.scss";
import { CustomLink } from "../CustomLink";
// import { FcLock, FcList } from "react-icons/fc";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <CustomLink to="/" text="Lists" />
      <CustomLink to="/another" text="Page" />
    </nav>
  );
};

export { Navigation };
