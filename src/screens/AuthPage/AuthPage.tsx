import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/UI/Button/Button";
import styles from "./Auth.module.css";
import { useAuth } from "../../contexts/AuthContext";

const AuthPage = () => {
  const [username, setUserName] = useState("");
  const { setUser } = useAuth();
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(username);
  };

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={username}
          placeholder="Enter Your Name"
          onChange={onInputChangeHandler}
        />
        <Button variant="secondary" type="submit" full>
          Login
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
