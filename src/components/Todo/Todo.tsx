import React, { FunctionComponent } from "react";
import { TodoItem as TodoItemType } from "../../types";
import TodoItem from "./TodoItem/TodoItem";

interface TodoProps {
  todoList: TodoItemType[];
}

const Todo: FunctionComponent<TodoProps> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          todo={todo}
          changeHandler={() => {}}
          deleteHandler={() => {}}
          onBlurHandler={() => {}}
        />
      ))}
    </ul>
  );
};

export default Todo;
