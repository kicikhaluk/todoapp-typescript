import { ChangeEvent, FunctionComponent, useState } from "react";
import styles from "./TodoItem.module.css";
import { useTodoContext } from "../../context/TodoContext";
import { TodoItem as TodoItemTypes } from "../../../types";

export interface TodoItemProps {
  todo: TodoItemTypes;
}
const TodoItem: FunctionComponent<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodoContext();
  const [updateTask, setUpdateTask] = useState(todo.task);

  const updateDispatch = () => {
    const updatedTodo = {
      ...todo,
      task: updateTask,
    };
    dispatch({ type: "updateTodoItem", payload: { todo: updatedTodo } });
  };

  const changeStatus = () => {
    dispatch({
      type: "updateTodoItem",
      payload: {
        todo: {
          ...todo,
          isDone: !todo.isDone,
        },
      },
    });
  };

  const onTaskChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUpdateTask(e.target.value);
  };

  return (
    <li className={styles.todo}>
      <input type="checkbox" checked={todo.isDone} onChange={changeStatus} />
      <input
        className={`${styles.input} ${todo.isDone ? styles.done : ""}`}
        type="text"
        disabled={todo.isDone}
        value={updateTask}
        onChange={onTaskChange}
        onBlur={updateDispatch}
      />
      <button
        className={styles.deleteBtn}
        onClick={() =>
          dispatch({ type: "deleteTodoItem", payload: { todoId: todo.id } })
        }
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
