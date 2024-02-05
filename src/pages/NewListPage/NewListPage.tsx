import React from "react";

import styles from "./NewListPage.module.scss";
import { AddForm } from "../../components/AddForm";

interface NewListPageProps {}

const NewListPage: React.FC<NewListPageProps> = () => {
  return (
    <div className={styles.newListPage}>
      <AddForm />
    </div>
  );
};

export { NewListPage };
