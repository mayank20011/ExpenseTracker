import styles from "./form.module.css";
import React, { useContext } from "react";
import { UserContext } from "../App";

const Form = () => {
  const value = useContext(UserContext);

  function handleform(event) {
    event.preventDefault();
    const text = event.target[0].value;
    const amount = event.target[1].value;
    if (amount=="" && text == "") {
      alert("Transactions Cant be Empty");
    } else if (amount == "") {
      alert("Enter Transaction Amount Before Commiting transaction:");
    }
    else if(text=="")
    {
      alert("Enter Transaction Name");
    }
     else {
      if (isNaN(+amount)) {
        alert("Only Enter Number in Transaction Amount");
      } else {
        let obj = {
          item: event.target[0].value,
          price: +event.target[1].value,
        };
        value.settransactionlist([obj, ...value.transactionlist]);
        event.target[0].value = "";
        event.target[1].value = "";
      }
    }
  }
  return (
    <form action="" onSubmit={handleform} className={styles.form}>
      <label htmlFor="">Text</label>
      <input type="text" placeholder="Enter text..." className={styles.input} />
      <label htmlFor="">
        Amount
        <br />
        (negative - expense, positive - income)
      </label>
      <input
        type="text"
        placeholder="Enter Amount..."
        className={styles.input}
      />
      <button type="submit" className={styles.submitbtn}>
        Add transaction
      </button>
    </form>
  );
};
export default Form;
