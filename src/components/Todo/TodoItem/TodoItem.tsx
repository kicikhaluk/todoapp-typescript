import React, { FunctionComponent } from "react";
import styles from "./TodoItem.module.css";

export interface TodoItemProps {
  todo: {
    id: string;
    task: string;
    status: "done" | "todo";
  };
  deleteHandler: () => void;
  changeHandler: () => void;
  onBlurHandler: () => void;
}

const TodoItem: FunctionComponent<TodoItemProps> = ({
  todo: { id, task, status },
  deleteHandler,
  changeHandler,
  onBlurHandler,
}) => {
  return (
    <li className={styles.todo}>
      <input
        type="checkbox"
        checked={status === "done" ? true : false}
        onChange={changeHandler}
      />
      <input
        className={`${styles.input} ${status === "done" ? styles.done : ""}`}
        type="text"
        disabled={status === "done"}
        value={task}
        onChange={changeHandler}
        onBlur={onBlurHandler}
      />
      <button className={styles.deleteBtn} onClick={deleteHandler}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
