import { Route, Switch } from "react-router-dom";
import AuthPage from "./screens/AuthPage/AuthPage";

const UnauthApp = () => {
  return (
    <Switch>
      <Route component={AuthPage} path="/" />
    </Switch>
  );
};

export default UnauthApp;
