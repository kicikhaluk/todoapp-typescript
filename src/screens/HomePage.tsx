import Card from "../components/Card/Card";
import TodoBlock from "../components/TodoBlock/TodoBlock";
import Button from "../components/UI/Button/Button";
import Column from "../components/UI/Column/Column";
import Row from "../components/UI/Row/Row";
import { useTodoCardContext } from "../components/context/TodoCardContext";
const HomePage = () => {
  const { createNewCard, cards } = useTodoCardContext();

  return (
    <Row>
      {cards.length > 0
        ? cards.map((card) => (
            <Column key={card.id}>
              <TodoBlock cardId={card.id} />
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
