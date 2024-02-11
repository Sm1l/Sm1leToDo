import React, { useEffect, useState } from "react";

import styles from "./ListCard.module.scss";
import { TList, deleteList } from "../../Store/ListStore";
import { AddNewToDo } from "../AddNewToDo";
import { ToDosContainer } from "../ToDosContainer";
import { useActiveListStore, setActiveList } from "../../Store/ActiveListStore";
import { RoundButton } from "../RoundButton";
import { AnimateRoundButton } from "../RoundButton/AnimateRoundButton";
import { AnimatePresence, motion } from "framer-motion";

interface ListCardProps {
  list: TList;
}

const ListCard: React.FC<ListCardProps> = ({ list }) => {
  const activeListId = useActiveListStore((state) => state.activeListId);
  const [addNewToDoIsActive, setAddNewToDoIsActive] = useState<boolean>(false);

  const listIsActive = () => {
    if (activeListId === list.id) {
      return true;
    }
    return false;
  };

  const toDosIsEmpty = () => {
    if (list.todos.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (!listIsActive()) {
      setAddNewToDoIsActive(false);
    }
  }, [activeListId]);

  const handleOpenList = () => {
    if (listIsActive()) {
      setActiveList("");
    } else {
      setActiveList(list.id);
    }
  };

  const handleDeleteList = () => {
    deleteList(list.id);
  };

  const handleSetNewTodoIsActive = () => {
    setAddNewToDoIsActive(!addNewToDoIsActive);
  };

  return (
    <motion.div className={`${styles.listCard} ${"ui-block"}`}>
      <div
        className={
          listIsActive() ? ` ${styles.mainContainer} ${styles.mainContainerActive}` : `${styles.mainContainer}`
        }
        onClick={handleOpenList}
      >
        <div className={styles.textContainer}>
          <h2 className={styles.listTitle}>{list.name}</h2>
          <span className={styles.listQuantity}>{` ${list.todos.length}`}</span>
        </div>
        <div className={styles.buttonsContainer}>
          <AnimatePresence>
            {listIsActive() && (
              <AnimateRoundButton>
                <RoundButton buttonType="add" handleClick={handleSetNewTodoIsActive} />
              </AnimateRoundButton>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {toDosIsEmpty() && listIsActive() && (
              <AnimateRoundButton>
                <RoundButton buttonType="delete" handleClick={handleDeleteList} />
              </AnimateRoundButton>
            )}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>
        {listIsActive() && addNewToDoIsActive && (
          <AddNewToDo listId={list.id} setAddNewToDoIsActive={setAddNewToDoIsActive} />
        )}
      </AnimatePresence>
      <AnimatePresence>{listIsActive() && !toDosIsEmpty() && <ToDosContainer list={list} />}</AnimatePresence>
    </motion.div>
  );
};

export { ListCard };
