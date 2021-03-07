import React, { MouseEvent, useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import Layout from "./components/Layout/Layout";
import Button from "./components/UI/Button/Button";
import Column from "./components/UI/Column/Column";
import Row from "./components/UI/Row/Row";

type cardObject = {
  id: string;
};

function App() {
  const [cards, setCards] = useState<cardObject[]>([]);
  const createNewCard = (event: MouseEvent) => {
    event.preventDefault();
    setCards([{ id: new Date().toISOString() }, ...cards]);
  };

  return (
    <>
      <Layout>
        <Row>
          {cards.length > 0
            ? cards.map((card) => (
                <Column key={card.id}>
                  <Card>
                    <Form />
                  </Card>
                </Column>
              ))
            : null}
          <Column>
            <Card type="default">
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
      </Layout>
    </>
  );
}

export default App;
