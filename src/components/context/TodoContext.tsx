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
  createTodoCard,
  deleteTodo,
  deleteTodoCard,
  titleHandler,
  updateTodo,
} from "../Helper/TodoHelpers";
type Action =
  | { type: "addTodoItem"; payload: { task: string; todoCardId: string } }
  | { type: "updateTodoItem"; payload: { todo: TodoItem; todoCardId: string } }
  | { type: "deleteTodoItem"; payload: { todoId: string; todoCardId: string } }
  | { type: "addCategory"; payload: { category: string; todoCardId: string } }
  | { type: "addTitle"; payload: { title: string; todoCardId: string } }
  | { type: "createTodoCard" }
  | { type: "deleteTodoCard"; payload: { todoCardId: string } };

type Dispatch = (action: Action) => void;

export type TodoState = { todoCards: Todo[] };

const TodoContext = createContext<
  { state: TodoState; dispatch: Dispatch } | undefined
>(undefined);

const initialState: TodoState = {
  todoCards: [],
};

const todoReducer = (state: TodoState, action: Action) => {
  switch (action.type) {
    case "addTodoItem":
      return addNewTodo(action.payload.task, action.payload.todoCardId, state);
    case "updateTodoItem":
      return updateTodo(action.payload.todo, action.payload.todoCardId, state);
    case "deleteTodoItem":
      return deleteTodo(
        action.payload.todoId,
        action.payload.todoCardId,
        state
      );
    case "addCategory":
      return categoryHandler(
        action.payload.category,
        action.payload.todoCardId,
        state
      );
    case "addTitle":
      return titleHandler(
        action.payload.title,
        action.payload.todoCardId,
        state
      );
    case "createTodoCard":
      return createTodoCard(state);
    case "deleteTodoCard":
      return deleteTodoCard(action.payload.todoCardId, state);
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
