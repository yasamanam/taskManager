import AddTransaction from "./../components/AddTransaction";
import Balance from "./../components/Balance";
import Income from "./../components/Income";
import React from "react";
import TransactionList from "./../components/TransactionList";

const ExpensePage = () => {
  return (
    <div className="container">
      <Balance />
      <Income />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default ExpensePage;
