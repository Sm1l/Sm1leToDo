import React from "react";

import styles from "./AnotherPage.module.scss";

interface AnotherPageProps {}

const AnotherPage: React.FC<AnotherPageProps> = () => {
  return <div className={styles.anotherPage}>AnotherPage Component</div>;
};

export { AnotherPage };
