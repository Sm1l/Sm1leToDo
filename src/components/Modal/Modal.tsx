import { motion } from "framer-motion";
import React, { useEffect } from "react";

import styles from "./Modal.module.scss";
import { IoMdCloseCircle } from "react-icons/io";

import { modalVariants } from "./modalVariants.ts";
import { AddForm } from "../AddForm/AddForm.tsx";

interface ModalProps {
  modalIsVisible: boolean;
  setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ modalIsVisible, setModalIsVisible }) => {
  const closeModalHandleClick = () => {
    setModalIsVisible(false);
  };

  //*disable scroll
  useEffect(() => {
    if (modalIsVisible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalIsVisible]);

  //*close modal "Escape"
  useEffect(() => {
    const escCloseModal = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        closeModalHandleClick();
      }
    };
    if (modalIsVisible) {
      window.addEventListener("keydown", escCloseModal);
    }
    return () => {
      window.removeEventListener("keydown", escCloseModal);
    };
  }, [modalIsVisible]);

  return (
    <div className={styles.overlay} onClick={closeModalHandleClick}>
      <motion.div
        className={`${styles.container} ui-block`}
        onClick={(e: React.SyntheticEvent<EventTarget>) => e.stopPropagation()}
        initial={"hidden"}
        animate={"visible"}
        exit={"exit"}
        key="container"
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        variants={modalVariants}
      >
        <AddForm closeModal={closeModalHandleClick} />
        <button className={styles.close} onClick={closeModalHandleClick}>
          <IoMdCloseCircle className={styles.svg} />
        </button>
      </motion.div>
    </div>
  );
};

export { Modal };
