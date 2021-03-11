import { FunctionComponent } from "react";
import styles from "./NavigationItem.module.css";

interface NavItemProps {
  category: string;
}

const NavigationItem: FunctionComponent<NavItemProps> = ({ category }) => {
  return (
    <>
      {category === "" ? null : (
        <li>
          <label className={styles.category}>
            <input type="checkbox" />
            {category}
          </label>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
