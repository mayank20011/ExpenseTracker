import styles from "./balance.module.css";
import { useContext } from "react";
import { UserContext } from "../App";
const Balance = () => {
  const value = useContext(UserContext);
  function calculatetransaction(arrayofobj) {
    let total = 0;
    for (let i = 0; i < arrayofobj.length; i++) {
      let obj = arrayofobj[i];
      total = total + obj.price;
    }
    return `$${total}`;
  }
  return (
    <div className={styles.balancecontainer}>
      <h4>YOUR BALANCE IS:</h4>
      <h1>
        {value.transactionlist.length === 0
          ? "$0.00"
          : calculatetransaction(value.transactionlist)}
      </h1>
    </div>
  );
};
export default Balance;
