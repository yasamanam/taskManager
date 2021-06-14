import AddTransaction from "./../components/AddTransaction";
import Balance from "./../components/Balance";
import { ExpensesProvider } from "./../context/ExpensesContext";
import Income from "./../components/Income";
import React from "react";
import TransactionList from "./../components/TransactionList";

const ExpensePage = () => {
  return (
    <div className="container">
      <ExpensesProvider>
        <Balance />
        <Income />
        <TransactionList />
        <AddTransaction />
      </ExpensesProvider>
    </div>
  );
};

export default ExpensePage;
