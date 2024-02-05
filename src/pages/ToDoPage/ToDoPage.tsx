import React from "react";

import styles from "./ToDoPage.module.scss";

interface ToDoPageProps {}

const ToDoPage: React.FC<ToDoPageProps> = () => {
  return <div className={styles.toDoPage}>ToDoPage Component</div>;
};

export { ToDoPage };
