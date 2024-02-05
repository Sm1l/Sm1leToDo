import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type TTheme = "blue" | "orange" | "white";

const initialThemeValue = { theme: "" };

export const useThemeStore = create<typeof initialThemeValue>()(
  devtools(
    persist(() => initialThemeValue, { name: "Sm1leToDo_ThemeStore" }),
    { name: "Theme" }
  )
);

export const setTheme = (newTheme: TTheme) => useThemeStore.setState((state) => ({ ...state, theme: newTheme }));
