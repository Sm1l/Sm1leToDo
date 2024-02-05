import React, { useEffect } from "react";
import styles from "./AddNewToDo.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { addToDo } from "../../Store/ListStore";
import { Button } from "../Button";
import { motion } from "framer-motion";

type TForm = {
  toDo: string;
};

interface AddNewToDoProps {
  listId: string;
  setAddNewToDoIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  // focusOnInput: () => void; //?
}

const AddNewToDo: React.FC<AddNewToDoProps> = ({ listId, setAddNewToDoIsActive }) => {
  const {
    handleSubmit,
    reset,
    register,
    setFocus,
    formState: { errors, isValid },
  } = useForm<TForm>({ mode: "onSubmit" });

  const capitalize = (str: string): string => {
    return str[0].toUpperCase() + str.slice(1);
  };

  const onSubmit: SubmitHandler<TForm> = (data) => {
    addToDo(listId, capitalize(data.toDo));
    setAddNewToDoIsActive(false);
    reset();
  };

  useEffect(() => {
    setFocus("toDo");
  }, []);

  return (
    <motion.form
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "", opacity: 1, transition: { type: "spring" } }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={styles.addNewToDo}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={errors?.toDo ? `${styles.input} ${styles.inputError}` : styles.input}
        type="text"
        autoComplete="off"
        placeholder="Add new ToDo"
        {...register("toDo", {
          required: "This field is required",
        })}
      />
      <Button type="submit" text="Add" disabled={!isValid} />
    </motion.form>
  );
};

export { AddNewToDo };
