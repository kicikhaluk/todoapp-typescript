import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoCardContextProvider } from "./components/context/TodoCardContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Router>
      <TodoCardContextProvider>
        <Layout>
          <Switch>
            <Route component={HomePage} path="/" />
          </Switch>
        </Layout>
      </TodoCardContextProvider>
    </Router>
  );
}

export default App;
