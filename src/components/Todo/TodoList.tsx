import { FunctionComponent } from "react";
import { TodoItem as TodoItemType } from "../../types";
import TodoItem from "./TodoItem/TodoItem";

interface TodoListProps {
  todos: TodoItemType[];
  todoCardId: string;
}

const TodoList: FunctionComponent<TodoListProps> = ({ todos, todoCardId }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} todoCardId={todoCardId} />
      ))}
    </ul>
  );
};

export default TodoList;
