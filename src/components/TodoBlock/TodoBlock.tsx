import { FunctionComponent, useState } from "react";
import { Todo } from "../../types";
import Card from "../Card/Card";
import { useTodoContext } from "../../contexts/TodoContext";
import Form from "../Form/Form";
import TodoList from "../Todo/TodoList";
import Button from "../UI/Button/Button";

import styles from "./TodoBlock.module.css";

interface TodoBlockProps {
  todoCard: Todo;
}

const TodoBlock: FunctionComponent<TodoBlockProps> = ({ todoCard }) => {
  const { dispatch } = useTodoContext();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const onSaveHandler = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <Card>
        <Form isSaved={isSaved} todoCard={todoCard} />
        <TodoList todos={todoCard.todos} todoCardId={todoCard.id} />
        {isSaved ? (
          <div className={styles.overlay}>
            <Button clickHandler={onSaveHandler}>Edit</Button>
            <Button
              clickHandler={() =>
                dispatch({
                  type: "deleteTodoCard",
                  payload: { todoCardId: todoCard.id },
                })
              }
            >
              Delete
            </Button>
          </div>
        ) : (
          <Button full clickHandler={onSaveHandler}>
            Save
          </Button>
        )}
      </Card>
    </div>
  );
};

export default TodoBlock;
