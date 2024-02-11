import React, { useState, useEffect } from "react";
import styles from "./Footer.module.scss";
import { Navigation } from "../Navigation";
import { ContainerMaxWidth } from "../ContainerMaxWidth";
import { RoundButton } from "../RoundButton";
import { createPortal } from "react-dom";
import { Modal } from "../Modal";
import { toggleReorder, useReorderStore } from "../../Store/ReorderStore";
interface FooterProps {
  appRef: React.RefObject<HTMLDivElement>;
}

const Footer: React.FC<FooterProps> = ({ appRef }) => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const reorderIsActive = useReorderStore((state) => state.reorderIsActive);

  const [appComponent, setAppComponent] = useState<Element | null>(appRef.current);

  useEffect(() => {
    setAppComponent(appRef.current);
  }, []);

  return (
    <footer className={styles.footer}>
      <ContainerMaxWidth>
        <div className={styles.footerContainer}>
          <Navigation />
          <div className={styles.buttonsContainer}>
            <div className={styles.container}>
              <RoundButton
                buttonType="reorder"
                handleClick={() => {
                  toggleReorder();
                }}
              />
              <span>
                Reorder <br /> {reorderIsActive ? "on" : "off"}
              </span>
            </div>
            <div className={styles.container}>
              <RoundButton
                buttonType="add"
                handleClick={() => {
                  setModalIsVisible(true);
                }}
              />
              <span>New list</span>
            </div>
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
