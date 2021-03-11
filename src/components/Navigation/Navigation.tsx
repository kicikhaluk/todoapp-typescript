import styles from "./Navigation.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import UserProfile from "./UserProfile/UserProfile";
import { useTodoCardContext } from "../context/TodoCardContext";

const Navigation = () => {
  const { cards } = useTodoCardContext();
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
                <NavigationItem key={category} category={category} />
              ))
          : null}
      </ul>
    </nav>
  );
};

export default Navigation;
