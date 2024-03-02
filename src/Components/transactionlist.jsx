import styles from "./transactionlist.module.css";
import List from "./list.jsx";
const TransactionList = () => {
  return (
    <div className={styles.transactionhistory}>
      <h2 className={styles.historyheading}>History</h2>
      <List></List>
    </div>
  );
};
export default TransactionList;
