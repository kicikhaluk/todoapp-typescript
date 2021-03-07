import React from "react";
import TodoItem from "./TodoItem/TodoItem";

const Todo = () => {
  return (
    <ul>
      <TodoItem
        todo={{ id: "1", task: "Groceries", status: "done" }}
        changeHandler={() => {}}
        deleteHandler={() => {}}
        onBlurHandler={() => {}}
      />
      <TodoItem
        todo={{ id: "2", task: "CS50", status: "todo" }}
        changeHandler={() => {}}
        deleteHandler={() => {}}
        onBlurHandler={() => {}}
      />
      <TodoItem
        todo={{ id: "3", task: "Orbvpn", status: "todo" }}
        changeHandler={() => {}}
        deleteHandler={() => {}}
        onBlurHandler={() => {}}
      />
    </ul>
  );
};

export default Todo;
