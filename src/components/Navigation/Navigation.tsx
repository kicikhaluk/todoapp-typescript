import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import UserProfile from "./UserProfile/UserProfile";
import { useTodoCardContext } from "../context/TodoCardContext";

const Navigation = () => {
  const { cards } = useTodoCardContext();
  const history = useHistory();
  const [queries, setQueries] = useState<string[]>([]);

  const queryHandler = (query: { param: string; isChecked: boolean }) => {
    let updatedQueries: string[];
    if (!query.isChecked) {
      updatedQueries = queries.filter((q) => q !== query.param);
    } else {
      updatedQueries = [...queries, query.param];
    }
    setQueries(updatedQueries);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    if (queries.length > 0) {
      queries.forEach((q) => {
        params.append("category", q);
      });
    } else {
      params.delete("category");
    }
    history.push({ search: params.toString() });
  }, [history, queries]);

  return (
    <nav className={styles.nav}>
      <UserProfile />
      <ul className={styles.categories}>
        {cards.length > 0
          ? cards
              .map((card) => card.category)
              .filter(
                (category, index, array) => array.indexOf(category) === index
              )
              .map((category) => (
                <NavigationItem
                  key={category}
                  category={category}
                  queryHandler={queryHandler}
                />
              ))
          : null}
      </ul>
    </nav>
  );
};

export default Navigation;
