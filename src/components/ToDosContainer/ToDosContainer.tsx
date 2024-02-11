import React from "react";

import { setTodos, TList, TTodo } from "../../Store/ListStore";
import styles from "./ToDosContainer.module.scss";

import { AnimatePresence, Reorder } from "framer-motion";
import { ToDoItem } from "../ToDoItem";

interface ToDosContainerProps {
  list: TList;
}

const ToDosContainer: React.FC<ToDosContainerProps> = ({ list }) => {
  const setTodosInList = (newTodo: TTodo[]) => {
    return setTodos(list.id, newTodo);
  };

  const listVariants = {
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05 },
    }),
    hidden: {
      x: -100,
      opacity: 0,
      transition: { delay: 0.05 },
    },
    delete: {
      x: 100,
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };
  return (
    <Reorder.Group
      as="ul"
      className={styles.toDoList}
      axis="y"
      values={list.todos}
      onReorder={setTodosInList}
      initial={{ height: 0 }}
      animate={{ height: "auto", transition: { type: "spring" } }}
      exit={{ height: 0, padding: 0, transition: { duration: 0.4, type: "spring" } }} //?
    >
      <AnimatePresence>
        {list.todos.map((todo, i) => (
          <Reorder.Item
            key={todo.id}
            as="li"
            value={todo}
            className={styles.toDoItemLi}
            variants={listVariants}
            initial="hidden"
            animate="visible"
            exit="delete"
            custom={i}
            whileDrag={{ scale: 1.05 }}
          >
            <ToDoItem list={list} todo={todo} />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

export { ToDosContainer };
