import React from "react";
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
      <ul>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            <input type="text" name="" id="" value="todo1" />
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            <input type="text" name="" id="" value="todo1" />
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            <input type="text" name="" id="" value="todo1" />
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="" id="" />
            <input type="text" name="" id="" value="todo1" />
          </label>
        </li>
      </ul>
      <div>
        <Button>Save</Button>
      </div>
    </form>
  );
};

export default Form;
