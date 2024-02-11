import React from "react";

import { AnimatePresence, Reorder } from "framer-motion";
import { setList, useListStore } from "../../Store/ListStore";
import { ListCard } from "../../components/ListCard";
import styles from "./ListsPage.module.scss";

interface ListsPageProps {}

const ListsPage: React.FC<ListsPageProps> = () => {
  const lists = useListStore((state) => state.lists);

  return (
    <Reorder.Group as="ul" className={styles.listsPage} axis="y" values={lists} onReorder={setList}>
      <AnimatePresence>
        {lists.map((list) => (
          <Reorder.Item
            as="li"
            value={list}
            key={list.id}
            whileDrag={{ scale: 1.02 }}
            initial={{ x: -100, height: 0, opacity: 0 }}
            animate={{ x: 0, height: "auto", opacity: 1, transition: { duration: 0.5, type: "spring" } }}
            exit={{ x: 100, height: 0, opacity: 0, transition: { duration: 0.5 } }}
          >
            <ListCard key={list.id} list={list} />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export { ListsPage };
