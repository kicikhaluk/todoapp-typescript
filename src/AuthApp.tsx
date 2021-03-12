import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { TodoContextProvider } from "./contexts/TodoContext";
import HomePage from "./screens/HomePage";

const AuthApp = () => {
  let history = useHistory();

  useEffect(() => {
    history.push("/home");
  }, [history]);

  return (
    <TodoContextProvider>
      <Switch>
        <Route component={HomePage} path="/home" />
      </Switch>
    </TodoContextProvider>
  );
};

export default AuthApp;
