import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AddForm.module.scss";
import { addList } from "../../Store/ListStore";
import { Button } from "../Button";

type TForm = {
  list: string;
};

interface AddFormProps {
  closeModal?: () => void;
}

const AddForm: React.FC<AddFormProps> = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors, isValid },
  } = useForm<TForm>({ mode: "onBlur" });

  const onSubmit: SubmitHandler<TForm> = (data) => {
    addList(data.list);
    reset();
    closeModal && closeModal();
  };

  useEffect(() => {
    setFocus("list");
  }, []);

  return (
    <form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="newList">Add new list:</label>
      <input
        className={errors?.list ? `${styles.input} ${styles.inputError}` : styles.input}
        id="newList"
        type="text"
        autoComplete="off"
        placeholder="Add new list"
        {...register("list", {
          required: "This field is required",
          minLength: { value: 2, message: "Min length is 2" },
        })}
      />
      <div className={styles.error}>{errors?.list && <p>{errors?.list?.message ?? "error"}</p>}</div>
      <Button type="submit" text="Add" disabled={!isValid} />
    </form>
  );
};

export { AddForm };
