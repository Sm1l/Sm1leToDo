import React from "react";

import styles from "./ToDoItem.module.scss";
import { TList, TTodo, toggleToDo, deleteToDo } from "../../Store/ListStore";
import { AnimatePresence, delay, motion, transform } from "framer-motion";
import { AnimateRoundButton } from "../RoundButton/AnimateRoundButton";
import { RoundButton } from "../RoundButton";

interface ToDoItemProps {
  list: TList;
  todo: TTodo;
  index: number;
}

const listVariants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: { delay: i * 0.1 },
  }),
  hidden: {
    opacity: 0,
    transition: { delay: 0.2 },
  },
  delete: {
    x: 1500,
    opacity: 0,
    transition: { delay: 0.3 },
  },
};

const ToDoItem: React.FC<ToDoItemProps> = ({ list, todo, index }) => {
  return (
    <motion.li
      className={styles.toDoItem}
      key={todo.id}
      variants={listVariants}
      initial="hidden"
      animate="visible"
      exit="delete"
      custom={index}
    >
      <div className={styles.info}>
        <label className={styles.customCheckbox}>
          <input
            className={styles.checkbox}
            type="checkbox"
            id={`todoId:${todo.id}`}
            checked={todo.isCompleted}
            onChange={() => toggleToDo(list.id, todo.id)}
          />
        </label>
        <label
          className={todo.isCompleted ? `${styles.label} ${styles.labelActive}` : `${styles.label}`}
          htmlFor={`todoId:${todo.id}`}
        >
          {todo.text}
        </label>
      </div>
      <AnimatePresence>
        {todo.isCompleted && (
          <AnimateRoundButton>
            <RoundButton buttonType="delete" handleClick={() => deleteToDo(list.id, todo.id)} />
          </AnimateRoundButton>
        )}
      </AnimatePresence>
    </motion.li>
  );
};

export { ToDoItem };
