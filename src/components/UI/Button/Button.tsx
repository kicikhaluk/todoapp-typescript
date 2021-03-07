import React, {
  ButtonHTMLAttributes,
  FunctionComponent,
  MouseEvent,
} from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  clickHandler?: ((event: MouseEvent<HTMLButtonElement>) => void) | undefined;
  props?: any;
  full?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  clickHandler,
  full,
  ...props
}) => {
  return (
    <button
      className={`${styles.btn} ${full ? styles.btnFull : ""}`}
      onClick={clickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
