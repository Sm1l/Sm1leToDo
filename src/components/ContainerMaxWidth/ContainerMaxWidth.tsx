import React from "react";

import styles from "./ContainerMaxWidth.module.scss";

interface ContainerMaxWidthProps {
  children: React.ReactNode;
}

const ContainerMaxWidth: React.FC<ContainerMaxWidthProps> = ({ children }) => {
  return <div className={styles.containerMaxWidth}>{children}</div>;
};

export { ContainerMaxWidth };
