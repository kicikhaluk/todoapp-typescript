import { FunctionComponent, useState, MouseEvent } from "react";
import Card from "../Card/Card";
import { TodoContextProvider } from "../context/TodoContext";
import Form from "../Form/Form";
import TodoList from "../Todo/TodoList";
import Button from "../UI/Button/Button";

import styles from "./TodoBlock.module.css";

interface TodoBlockProps {
  deleteCardHandler: (cardId: string) => void;
  cardId: string;
}

const TodoBlock: FunctionComponent<TodoBlockProps> = ({
  deleteCardHandler,
  cardId,
}) => {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const onSaveHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setIsSaved((prev) => !prev);
  };

  return (
    <TodoContextProvider>
      <div className={styles.card}>
        <Card>
          <Form isSaved={isSaved} />
          <TodoList />
          {isSaved ? (
            <div className={styles.overlay}>
              <Button clickHandler={onSaveHandler}>Edit</Button>
              <Button clickHandler={() => deleteCardHandler(cardId)}>
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
    </TodoContextProvider>
  );
};

export default TodoBlock;
