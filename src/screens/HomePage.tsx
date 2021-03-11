import { useState, MouseEvent } from "react";
import Card from "../components/Card/Card";
import TodoBlock from "../components/TodoBlock/TodoBlock";
import Button from "../components/UI/Button/Button";
import Column from "../components/UI/Column/Column";
import Row from "../components/UI/Row/Row";
import { cardObject } from "../types";

const HomePage = () => {
  const [cards, setCards] = useState<cardObject[]>([]);

  const createNewCard = (e: MouseEvent) => {
    e.preventDefault();
    setCards([{ id: new Date().toISOString() }, ...cards]);
  };

  const deleteCard = (cardId: string) => {
    const updatedCard = cards.filter((card) => card.id !== cardId);
    setCards(updatedCard);
  };

  return (
    <Row>
      {cards.length > 0
        ? cards.map((card) => (
            <Column key={card.id}>
              <TodoBlock cardId={card.id} deleteCardHandler={deleteCard} />
            </Column>
          ))
        : null}
      <Column>
        <Card type="flex">
          <h3>New Project</h3>
          <Button
            full
            clickHandler={createNewCard}
            style={{ marginTop: "auto" }}
          >
            Create
          </Button>
        </Card>
      </Column>
    </Row>
  );
};

export default HomePage;
