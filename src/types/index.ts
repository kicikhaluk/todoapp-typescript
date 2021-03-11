export type TodoItem = {
  id: string;
  task: string;
  isDone: true | false;
};

export type Todo = {
  id: string;
  title: string;
  category: string;
  todos: TodoItem[];
};

export type cardObject = {
  id: string;
};
