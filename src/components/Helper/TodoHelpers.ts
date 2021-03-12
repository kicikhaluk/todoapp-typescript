import { Todo, TodoItem } from "../../types";
import { TodoState } from "../context/TodoContext";

export const titleHandler = (
  title: string,
  todoCardId: string,
  state: TodoState
) => {
  const getTodoCardIndex = state.todoCards.findIndex(
    (todoCard) => todoCard.id === todoCardId
  );
  const updatedTodoCards = [...state.todoCards];
  const updatedTodoCard = { ...updatedTodoCards[getTodoCardIndex] };
  updatedTodoCard.title = title;
  updatedTodoCards[getTodoCardIndex] = updatedTodoCard;
  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};

export const categoryHandler = (
  category: string,
  todoCardId: string,
  state: TodoState
) => {
  const getTodoCardIndex = state.todoCards.findIndex(
    (todoCard) => todoCard.id === todoCardId
  );
  const updatedTodoCards = [...state.todoCards];
  const updatedTodoCard = { ...updatedTodoCards[getTodoCardIndex] };
  updatedTodoCard.category = category;
  updatedTodoCards[getTodoCardIndex] = updatedTodoCard;
  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};

export const addNewTodo = (
  task: string,
  todoCardId: string,
  state: TodoState
) => {
  const getTodoCardIndex = state.todoCards.findIndex(
    (todoCard) => todoCard.id === todoCardId
  );
  const updatedTodoCards = [...state.todoCards];
  const updatedTodoCard = { ...updatedTodoCards[getTodoCardIndex] };
  const updatedTodos = [...updatedTodoCard.todos];
  const newTodo: TodoItem = {
    id: new Date().toISOString(),
    task: task,
    isDone: false,
  };
  updatedTodos.push(newTodo);
  updatedTodoCard.todos = updatedTodos;
  updatedTodoCards[getTodoCardIndex] = updatedTodoCard;

  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};

export const updateTodo = (
  todoItem: TodoItem,
  todoCardId: string,
  state: TodoState
) => {
  const getTodoCardIndex = state.todoCards.findIndex(
    (todoCard) => todoCard.id === todoCardId
  );
  const updatedTodoCards = [...state.todoCards];
  const updatedTodoCard = { ...updatedTodoCards[getTodoCardIndex] };
  const updatedTodos = [...updatedTodoCard.todos];
  const todoIndex = updatedTodos.findIndex((todo) => todo.id === todoItem.id);
  updatedTodos[todoIndex] = { ...todoItem };
  updatedTodoCard.todos = updatedTodos;
  updatedTodoCards[getTodoCardIndex] = updatedTodoCard;

  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};

export const deleteTodo = (
  todoId: string,
  todoCardId: string,
  state: TodoState
) => {
  const getTodoCardIndex = state.todoCards.findIndex(
    (todoCard) => todoCard.id === todoCardId
  );
  const updatedTodoCards = [...state.todoCards];
  const updatedTodoCard = { ...updatedTodoCards[getTodoCardIndex] };
  const updatedTodos = updatedTodoCard.todos.filter(
    (todo) => todo.id !== todoId
  );
  updatedTodoCard.todos = updatedTodos;
  updatedTodoCards[getTodoCardIndex] = updatedTodoCard;

  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};

export const createTodoCard = (state: TodoState) => {
  const newCardItem: Todo = {
    id: new Date().toISOString(),
    title: "",
    category: "",
    todos: [],
  };
  const updatedTodoCards = [newCardItem, ...state.todoCards];
  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};
export const deleteTodoCard = (todoCardId: string, state: TodoState) => {
  const updatedTodoCards = state.todoCards.filter(
    (todoCard) => todoCard.id !== todoCardId
  );
  return {
    ...state,
    todoCards: updatedTodoCards,
  };
};
