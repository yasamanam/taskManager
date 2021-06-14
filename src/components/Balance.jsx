import React, { useContext } from "react";

import { ExpensesContext } from "./../context/ExpensesContext";

const Balance = () => {
  const { transactions } = useContext(ExpensesContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((sum, item) => (sum += item)).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
