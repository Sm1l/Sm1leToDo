import React from "react";

import styles from "./ListsPage.module.scss";
import { useListStore } from "../../Store/ListStore";
import { ListCard } from "../../components/ListCard";
import { AnimatePresence } from "framer-motion";

interface ListsPageProps {}

const ListsPage: React.FC<ListsPageProps> = () => {
  const lists = useListStore((state) => state.lists);

  return (
    <div className={styles.listsPage}>
      <AnimatePresence>
        {lists.map((list) => (
          <ListCard key={list.id} list={list} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export { ListsPage };
