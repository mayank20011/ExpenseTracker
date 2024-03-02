import styles from "./incomeexpense.module.css";
import { UserContext } from "../App";
import { useContext } from "react";
const IncomeExpense = () => {
  function calculateincome(arrayofobj) {
    let income = 0;
    arrayofobj.forEach((element) => {
      if (element.price> 0) {
        income = income + element.price;
      }
    });
    return `$${income}`;
  }

  function calculateexpense(arrayofobj)
  {
      let expense=0;
      arrayofobj.forEach(element=>
        {
          if(element.price<0)
          {
            expense=expense + element.price;
          }
        });

        return `$${expense}`
  }
  const value = useContext(UserContext);
  return (
    <div className={styles.incomeexpense}>
      <div className={`${styles.box} ${styles.income}`}>
        <h4>INCOME</h4>
        <h2 className={styles.green}>
          {value.transactionlist.length === 0
            ? "$0.00"
            : calculateincome(value.transactionlist)}
        </h2>
      </div>
      <div className={styles.box}>
        <h4>EXPENSE</h4>
        <h2 className={styles.red}>{value.transactionlist.length===0? "$0.00":calculateexpense(value.transactionlist)}</h2>
      </div>
    </div>
  );
};
export default IncomeExpense;
