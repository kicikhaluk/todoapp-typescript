import TodoItem from "./TodoItem/TodoItem";
import { useTodoContext } from "../context/TodoContext";
const TodoList = () => {
  const { state } = useTodoContext();
  return (
    <ul>
      {state.todo.todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
