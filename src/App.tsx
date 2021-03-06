import React from "react";
import Card from "./components/Card/Card";
import Layout from "./components/Layout/Layout";
import Column from "./components/UI/Column/Column";
import Row from "./components/UI/Row/Row";

function App() {
  return (
    <>
      <Layout>
        <Row>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
          <Column>
            <Card />
          </Column>
        </Row>
      </Layout>
    </>
  );
}

export default App;
