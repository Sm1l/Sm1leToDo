import React from "react";

import styles from "./ToDoItem.module.scss";
import { TList, TTodo, toggleToDo, deleteToDo } from "../../Store/ListStore";
import { AnimatePresence, motion } from "framer-motion";
import { AnimateRoundButton } from "../RoundButton/AnimateRoundButton";
import { RoundButton } from "../RoundButton";

interface ToDoItemProps {
  list: TList;
  todo: TTodo;
}

const ToDoItem: React.FC<ToDoItemProps> = ({ list, todo }) => {
  return (
    <motion.div className={styles.toDoItem} key={todo.id}>
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
    </motion.div>
  );
};

export { ToDoItem };
