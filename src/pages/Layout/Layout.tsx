import React from "react";

// import styles from "./Layout.module.scss";
import { Outlet } from "react-router-dom";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

interface LayoutProps {
  appRef: React.RefObject<HTMLDivElement>;
}

const Layout: React.FC<LayoutProps> = ({ appRef }) => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer appRef={appRef} />
    </>
  );
};

export { Layout };
