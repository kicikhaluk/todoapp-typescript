import { useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import TodoBlock from "../components/TodoBlock/TodoBlock";
import Button from "../components/UI/Button/Button";
import Column from "../components/UI/Column/Column";
import Row from "../components/UI/Row/Row";
import { useTodoContext } from "../contexts/TodoContext";
const HomePage = () => {
  const {
    state: { todoCards },
    dispatch,
  } = useTodoContext();
  const queries = new URLSearchParams(useLocation().search).getAll("category");

  return (
    <Row>
      {todoCards.length > 0
        ? queries.length > 0
          ? todoCards.map((card) => {
              if (queries.includes(card.category)) {
                return (
                  <Column key={card.id}>
                    <TodoBlock todoCard={card} />
                  </Column>
                );
              }
              return null;
            })
          : todoCards.map((card) => (
              <Column key={card.id}>
                <TodoBlock todoCard={card} />
              </Column>
            ))
        : null}
      <Column>
        <Card type="flex">
          <h3>New Project</h3>
          <Button
            full
            clickHandler={() => dispatch({ type: "createTodoCard" })}
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
