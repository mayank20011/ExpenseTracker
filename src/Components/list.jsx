import styles from "./list.module.css";
import { UserContext } from "../App";
import { useContext } from "react";
const expense = [20, -40, 50, -300, -10, 0];
const List = () => {
  const value = useContext(UserContext);
  return (
    <ul className={styles.ul}>
      {value.transactionlist.length === 0 ? (
        <h4>No Transactions</h4>
      ) : (
        value.transactionlist.map((item, index) => (
          <li
            key={item.item}
            className={
              item.price >= 0
                ? `${styles.li} ${styles.ligreen}`
                : `${styles.li} ${styles.lired}`
            }
          >
            <h4>{item.item}</h4>
            {item.price > 0 ? (
              <h4>{`+${item.price}`}</h4>
            ) : (
              <h4>{item.price}</h4>
            )}
          </li>
        ))
      )}
    </ul>
  );
};
export default List;
