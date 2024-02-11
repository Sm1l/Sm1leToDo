import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialActiveListValue = { activeListId: "" };

export const useActiveListStore = create<typeof initialActiveListValue>()(
  devtools(
    persist(() => initialActiveListValue, { name: "Sm1leToDo_ActiveListStore" }),
    { name: "ActiveList" }
  )
);

export const setActiveList = (newActiveListId: string) =>
  useActiveListStore.setState((state) => ({ ...state, activeListId: newActiveListId }));
