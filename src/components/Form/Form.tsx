import { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import { Todo } from "../../types";
import { useTodoContext } from "../../contexts/TodoContext";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";

interface FormProps {
  isSaved: boolean;
  todoCard: Todo;
}

const Form: FunctionComponent<FormProps> = ({ isSaved, todoCard }) => {
  const { dispatch } = useTodoContext();
  const [cardTitle, setCardTitle] = useState<string>(todoCard.title);
  const [category, setCategory] = useState<string>(todoCard.category);
  const [newTodo, setNewTodo] = useState("");

  const cardTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCardTitle(e.target.value);
  };

  const categoryHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const newTodoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodoHandler = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: "addTodoItem",
      payload: { task: newTodo, todoCardId: todoCard.id },
    });
    setNewTodo("");
  };

  return (
    <div className={styles.form}>
      <div className={styles.formElement}>
        <input
          type="text"
          placeholder="New Project"
          value={cardTitle}
          onChange={cardTitleHandler}
          onBlur={() =>
            dispatch({
              type: "addTitle",
              payload: { title: cardTitle, todoCardId: todoCard.id },
            })
          }
        />
      </div>
      <div className={styles.formElement}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={categoryHandler}
          onBlur={() => {
            dispatch({
              type: "addCategory",
              payload: { category, todoCardId: todoCard.id },
            });
          }}
        />
      </div>
      <div className={`${styles.formElement} ${styles.todoInputField}`}>
        <input
          type="text"
          placeholder="To Do"
          value={newTodo}
          onChange={newTodoHandler}
        />

        {!isSaved ? (
          <Button onClick={addTodoHandler} size="sm">
            Add
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
