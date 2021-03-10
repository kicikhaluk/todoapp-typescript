import React, { ChangeEvent, MouseEvent, useState } from "react";
import Todo from "../Todo/Todo";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
import { TodoItem } from "../../types/index";

const Form = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const newTodoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const addTodoHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newTodoItem: TodoItem = {
      id: new Date().toISOString(),
      task: newTodo,
      status: "todo",
    };
    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  return (
    <form className={styles.form}>
      <div className={styles.formElement}>
        <input type="text" name="" id="" placeholder="New Project" />
      </div>
      <div className={styles.formElement}>
        <input type="text" placeholder="Category" />
      </div>
      <div className={`${styles.formElement} ${styles.todoInputField}`}>
        <input
          type="text"
          placeholder="To Do"
          value={newTodo}
          onChange={newTodoHandler}
        />
        <Button onClick={addTodoHandler} size="sm">
          Add
        </Button>
      </div>
      <Todo todoList={todos} />
      <div className={styles.formElement}>
        <Button full>Save</Button>
      </div>
    </form>
  );
};

export default Form;
