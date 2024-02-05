import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { Navigation } from "../Navigation";
import { ContainerMaxWidth } from "../ContainerMaxWidth";
import { RoundButton } from "../RoundButton";
import { createPortal } from "react-dom";
import { Modal } from "../Modal";

interface FooterProps {
  appRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ appRef }) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const [appComponent, setAppComponent] = useState<Element | null>(appRef.current);

  useEffect(() => {
    setAppComponent(appRef.current);
  }, []);

  return (
    <footer className={styles.footer}>
      <ContainerMaxWidth>
        <div className={styles.footerContainer}>
          <Navigation />
          <div className={styles.addContainer}>
            <RoundButton
              buttonType="add"
              handleClick={() => {
                setModalIsVisible(true);
              }}
            />
            <span>New list</span>
          </div>
        </div>
      </ContainerMaxWidth>
      {modalIsVisible &&
        appComponent &&
        createPortal(<Modal modalIsVisible={modalIsVisible} setModalIsVisible={setModalIsVisible} />, appComponent)}
    </footer>
  );
};

export { Footer };
