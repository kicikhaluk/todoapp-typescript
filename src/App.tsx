import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodoContextProvider } from "./contexts/TodoContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./screens/HomePage";

function App() {
  return (
    <Router>
      <TodoContextProvider>
        <Layout>
          <Switch>
            <Route component={HomePage} path="/" />
          </Switch>
        </Layout>
      </TodoContextProvider>
    </Router>
  );
}

export default App;
