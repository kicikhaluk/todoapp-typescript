import { ChangeEvent, FunctionComponent, useState } from "react";
import styles from "./NavigationItem.module.css";

interface NavItemProps {
  category: string;
  queryHandler: (query: { param: string; isChecked: boolean }) => void;
}

const NavigationItem: FunctionComponent<NavItemProps> = ({
  category,
  queryHandler,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      {category === "" ? null : (
        <li>
          <label className={styles.category}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsChecked(e.target.checked);
                queryHandler({ param: category, isChecked: e.target.checked });
              }}
            />
            {category}
          </label>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
