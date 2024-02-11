import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const initialReorderValue = { reorderIsActive: false };

export const useReorderStore = create<typeof initialReorderValue>()(
  devtools(
    persist(() => initialReorderValue, { name: "Sm1leToDo_Reorder" }),
    { name: "Reorder" }
  )
);

export const toggleReorder = () =>
  useReorderStore.setState((state) => ({ ...state, reorderIsActive: !state.reorderIsActive }));
