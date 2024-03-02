import styles from "./App.module.css";
import Header from "./Components/Header";
import React from "react";
import Balance from "./Components/Balance";
import IncomeExpense from "./Components/incomeExpense";
import TransactionList from "./Components/transactionlist";
import AddTransaction from "./Components/AddTransaction.jsx";
import { useState, createContext } from "react";
export const UserContext = React.createContext();

const App = () => {
  const [transactionlist, settransactionlist] = useState([]);
  return (
    <div className={styles.expensetracker}>
      <Header></Header>
      <UserContext.Provider value={{ transactionlist, settransactionlist }}>
        <Balance></Balance>
        <IncomeExpense></IncomeExpense>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </UserContext.Provider>
    </div>
  );
};
export default App;
