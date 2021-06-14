import React, { useContext } from "react";

import { ExpensesContext } from "./../context/ExpensesContext";

const Income = () => {
  const { transactions } = useContext(ExpensesContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((sum, item) => (sum += item), 0)
    .toFixed(2);

  const expenses = amounts
    .filter((item) => item < 0)
    .reduce((sum, item) => (sum += item), 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expenses)}</p>
      </div>
    </div>
  );
};

export default Income;
