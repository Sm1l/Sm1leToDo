import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { nanoid } from "nanoid";

export type TTodo = {
  id: string;
  text: string;
  date: Date;
  isCompleted: boolean;
};

export type TList = {
  id: string;
  name: string;
  todos: [] | TTodo[];
};

type TListsState = {
  lists: [] | TList[];
};

const initialListValue: TListsState = { lists: [] };

export const useListStore = create<typeof initialListValue>()(
  devtools(
    persist(() => initialListValue, { name: "Sm1leToDo_ListStore" }),
    { name: "ToDo" }
  )
);

export const addList = (name: string) =>
  useListStore.setState((state) => ({ ...state, lists: [...state.lists, { id: nanoid(), name, todos: [] }] }));

export const deleteList = (listId: string) => {
  useListStore.setState((state) => {
    const newLists: TList[] = state.lists.filter((list) => listId !== list.id);
    return { ...state, lists: newLists };
  });
};

export const addToDo = (listId: string, todoText: string) =>
  useListStore.setState((state) => {
    const index = state.lists.findIndex((list) => list.id === listId);
    if (index !== -1) {
      const newTodo: TTodo = {
        id: nanoid(),
        text: todoText,
        date: new Date(),
        isCompleted: false,
      };
      const newList = {
        ...state.lists[index],
        todos: [...state.lists[index].todos, newTodo],
      };
      const newLists = [...state.lists.slice(0, index), newList, ...state.lists.slice(index + 1)];
      return { ...state, lists: newLists };
    }
    return state;
  });

export const deleteToDo = (listId: string, todoId: string) => {
  useListStore.setState((state) => {
    const listIndex = state.lists.findIndex((list) => list.id === listId);
    if (listIndex !== -1) {
      const todoIndex = state.lists[listIndex].todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        const newLists = [...state.lists];
        newLists[listIndex].todos.splice(todoIndex, 1);
        return { ...state, lists: newLists };
      }
    }
    return state;
  });
};

export const toggleToDo = (listId: string, todoId: string) => {
  useListStore.setState((state) => {
    const listIndex = state.lists.findIndex((list) => list.id === listId);
    if (listIndex !== -1) {
      const todoIndex = state.lists[listIndex].todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        const newLists = [...state.lists];
        newLists[listIndex].todos[todoIndex].isCompleted = !newLists[listIndex].todos[todoIndex].isCompleted;
        return { ...state, lists: newLists };
      }
    }
    return state;
  });
};
