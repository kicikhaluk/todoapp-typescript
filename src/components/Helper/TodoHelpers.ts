import { TodoItem } from "../../types";
import { TodoState } from "../context/TodoContext";

export const titleHandler = (title: string, state: TodoState) => {
  return {
    ...state,
    todo: {
      ...state.todo,
      title,
    },
  };
};

export const categoryHandler = (category: string, state: TodoState) => {
  return {
    ...state,
    todo: {
      ...state.todo,
      category,
    },
  };
};

export const addNewTodo = (task: string, state: TodoState) => {
  const newTodo: TodoItem = {
    id: new Date().toISOString(),
    task: task,
    isDone: false,
  };
  return {
    ...state,
    todo: {
      ...state.todo,
      todos: [...state.todo.todos, newTodo],
    },
  };
};

export const updateTodo = (todoItem: TodoItem, state: TodoState) => {
  const todoIndex = state.todo.todos.findIndex(
    (todo) => todo.id === todoItem.id
  );
  const updatedTodos = [...state.todo.todos];
  updatedTodos[todoIndex] = { ...todoItem };
  return {
    ...state,
    todo: {
      ...state.todo,
      todos: updatedTodos,
    },
  };
};

export const deleteTodo = (todoId: string, state: TodoState) => {
  const updatedTodoList = state.todo.todos.filter((todo) => todo.id !== todoId);
  return {
    ...state,
    todo: {
      ...state.todo,
      todos: updatedTodoList,
    },
  };
};
