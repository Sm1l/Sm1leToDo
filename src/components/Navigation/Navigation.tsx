import React from "react";

import styles from "./Navigation.module.scss";
import { CustomLink } from "../CustomLink";
import { FcLock, FcList } from "react-icons/fc";

interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className={styles.navigation}>
      <CustomLink icon={FcList} to="/" text="Lists" />
      {/* <CustomLink icon={FcTodoList} to="/todo" text="Todo Page" /> */}
      <CustomLink icon={FcLock} to="/another" text="Another Page" />
      {/* <CustomLink icon={FcPlus} to="/new" text="New list" /> */}
    </nav>
  );
};

export { Navigation };
