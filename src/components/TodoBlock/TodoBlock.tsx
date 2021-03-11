import { FunctionComponent, useState } from "react";
import Card from "../Card/Card";
import { TodoContextProvider } from "../context/TodoContext";
import { useTodoCardContext } from "../context/TodoCardContext";
import Form from "../Form/Form";
import TodoList from "../Todo/TodoList";
import Button from "../UI/Button/Button";

import styles from "./TodoBlock.module.css";

interface TodoBlockProps {
  cardId: string;
}

const TodoBlock: FunctionComponent<TodoBlockProps> = ({ cardId }) => {
  const { deleteCard } = useTodoCardContext();
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const onSaveHandler = () => {
    setIsSaved((prev) => !prev);
  };

  return (
    <TodoContextProvider>
      <div className={styles.card}>
        <Card>
          <Form isSaved={isSaved} cardId={cardId} />
          <TodoList />
          {isSaved ? (
            <div className={styles.overlay}>
              <Button clickHandler={onSaveHandler}>Edit</Button>
              <Button clickHandler={() => deleteCard(cardId)}>Delete</Button>
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
