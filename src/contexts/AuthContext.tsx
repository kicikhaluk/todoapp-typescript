import { createContext, FunctionComponent, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

type User = {
  name: string | undefined;
  setUser: (username: string) => void;
  logout: () => void;
};

const getUsername = () => {
  const username = localStorage.getItem("username");
  if (username) {
    return username;
  }
};

const AuthContext = createContext<User | undefined>(undefined);

const AuthContextProvider: FunctionComponent = ({ children }) => {
  const history = useHistory();
  const [username, setUsername] = useState<string | undefined>(getUsername());

  const saveUsername = (username: string) => {
    localStorage.setItem("username", username);
    setUsername(username);
  };

  const logout = () => {
    localStorage.clear();
    setUsername(undefined);
    console.log("sa");
    history.push("/");
  };

  const value = {
    name: username,
    setUser: saveUsername,
    logout,
  };

  return <AuthContext.Provider value={value}>{children};</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth can be used only inside of the AuthContext");
  }
  return context;
};

export { useAuth, AuthContextProvider };
