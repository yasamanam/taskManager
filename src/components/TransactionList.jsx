import React, { useContext } from "react";

import { ExpensesContext } from "./../context/ExpensesContext";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(ExpensesContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
