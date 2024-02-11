import React from "react";

import { AnimatePresence, Reorder } from "framer-motion";
import { setList, useListStore } from "../../Store/ListStore";
import { useReorderStore } from "../../Store/ReorderStore";
import { ListCard } from "../../components/ListCard";
import styles from "./ListsPage.module.scss";
import { useActiveListStore } from "../../Store/ActiveListStore";

interface ListsPageProps {}

const ListsPage: React.FC<ListsPageProps> = () => {
  const lists = useListStore((state) => state.lists);
  const reorderIsActive = useReorderStore((state) => state.reorderIsActive);
  const activeListId = useActiveListStore((state) => state.activeListId);

  const listsIsDraggable = (activeListId: string, reorderIsActive: boolean) => {
    if (reorderIsActive && activeListId === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Reorder.Group as="ul" className={styles.listsPage} axis="y" values={lists} onReorder={setList}>
      <AnimatePresence>
        {lists.map((list) => (
          <Reorder.Item
            as="li"
            value={list}
            key={list.id}
            whileDrag={{ scale: 1.02 }}
            drag={listsIsDraggable(activeListId, reorderIsActive)}
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
