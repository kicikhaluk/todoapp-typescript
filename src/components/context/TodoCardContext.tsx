import { createContext, FunctionComponent, useContext, useState } from "react";
import { TodoCard } from "../../types";

interface CardContextProps {
  createNewCard: () => void;
  deleteCard: (cardId: string) => void;
  updateCardCategory: (cardId: string, category: string) => void;
  cards: TodoCard[];
}

const TodoCardContext = createContext<CardContextProps | undefined>(undefined);

const TodoCardContextProvider: FunctionComponent = ({ children }) => {
  const [todoCards, setTodoCards] = useState<TodoCard[]>([]);

  const updateCardCategory = (cardId: string, category: string) => {
    const cardIndex = todoCards.findIndex((card) => card.id === cardId);
    const updatedCards = [...todoCards];
    updatedCards[cardIndex].category = category;
    setTodoCards(updatedCards);
  };

  const createNewCard = () => {
    const newCard = {
      id: new Date().toISOString(),
      category: "",
    };
    setTodoCards([newCard, ...todoCards]);
  };

  const deleteCard = (cardId: string) => {
    const updatedCards = todoCards.filter((card) => card.id !== cardId);
    setTodoCards(updatedCards);
  };

  const value = {
    createNewCard: createNewCard,
    deleteCard: deleteCard,
    updateCardCategory: updateCardCategory,
    cards: todoCards,
  };

  return (
    <TodoCardContext.Provider value={value}>
      {children}
    </TodoCardContext.Provider>
  );
};

const useTodoCardContext = () => {
  const context = useContext(TodoCardContext);
  if (!context) {
    throw new Error(
      "useTodoCardContex can not use outside of the TodoCardContextProvider"
    );
  }
  return context;
};

export { TodoCardContextProvider, useTodoCardContext };
