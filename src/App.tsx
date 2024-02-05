import React, { useRef } from "react";
import styles from "./App.module.scss";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { ToDoPage } from "./pages/ToDoPage";
import { AnotherPage } from "./pages/AnotherPage";
import { NewListPage } from "./pages/NewListPage";
import { ListsPage } from "./pages/ListsPage";

interface MainProps {}

const App: React.FC<MainProps> = () => {
  const appRef = useRef(null);

  return (
    <div className={styles.app} ref={appRef}>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="/" element={<Layout appRef={appRef} />}>
              <Route path="new" element={<NewListPage />} />
              <Route index element={<ListsPage />} />
              <Route path="todo" element={<ToDoPage />} />
              <Route path="another" element={<AnotherPage />} />
            </Route>
          )
        )}
      />
    </div>
  );
};

export { App };
