import React from "react";

import { TList } from "../../Store/ListStore";
import styles from "./ToDosContainer.module.scss";

import { AnimatePresence, motion } from "framer-motion";
import { ToDoItem } from "../ToDoItem";

interface ToDosContainerProps {
  list: TList;
}

const ToDosContainer: React.FC<ToDosContainerProps> = ({ list }) => {
  return (
    <motion.ul
      key={"ul"}
      initial={{ height: 0 }}
      animate={{ height: "auto", transition: { type: "spring" } }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      className={styles.toDoList}
    >
      <AnimatePresence>
        {list.todos.map((todo, i) => (
          <ToDoItem key={todo.id} list={list} todo={todo} index={i} />
        ))}
      </AnimatePresence>
    </motion.ul>
  );
};

export { ToDosContainer };
