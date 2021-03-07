import React from "react";
import Todo from "../Todo/Todo";
import Button from "../UI/Button/Button";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <form className={styles.form}>
      <div>
        <input type="text" name="" id="" placeholder="New Project" />
      </div>
      <div>
        <input type="text" placeholder="Category" />
      </div>
      <div>
        <input type="text" placeholder="To Do" />
        <Button>Add</Button>
      </div>
      <Todo />
      <div>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default Form;
