import {
  createContext,
  FunctionComponent,
  useContext,
  useReducer,
} from "react";
import { Todo, TodoItem } from "../../types";
import {
  addNewTodo,
  categoryHandler,
  deleteTodo,
  titleHandler,
  updateTodo,
} from "../Helper/TodoHelpers";
type Action =
  | { type: "addTodoItem"; payload: { task: string } }
  | { type: "updateTodoItem"; payload: { todo: TodoItem } }
  | { type: "deleteTodoItem"; payload: { todoId: string } }
  | { type: "addCategory"; payload: { category: string } }
  | { type: "addTitle"; payload: { title: string } };

type Dispatch = (action: Action) => void;

export type TodoState = { todo: Todo };

const TodoContext = createContext<
  { state: TodoState; dispatch: Dispatch } | undefined
>(undefined);

const initialState: TodoState = {
  todo: {
    id: new Date().toISOString(),
    title: "",
    category: "",
    todos: [],
  },
};

const todoReducer = (state: TodoState, action: Action) => {
  switch (action.type) {
    case "addTodoItem":
      return addNewTodo(action.payload.task, state);
    case "updateTodoItem":
      return updateTodo(action.payload.todo, state);
    case "deleteTodoItem":
      return deleteTodo(action.payload.todoId, state);
    case "addCategory":
      return categoryHandler(action.payload.category, state);
    case "addTitle":
      return titleHandler(action.payload.title, state);
    default: {
      throw new Error("Unhandled action type");
    }
  }
};

const TodoContextProvider: FunctionComponent = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const value = { state, dispatch };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext cannot use outside of TodoContextProvider");
  }
  return context;
};

export { useTodoContext, TodoContextProvider };
