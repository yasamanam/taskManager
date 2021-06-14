import React, { useContext } from "react";

import { ExpensesContext } from "./../context/ExpensesContext";
import { FaWindowClose } from "react-icons/fa";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(ExpensesContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        <FaWindowClose />
      </button>
    </li>
  );
};

export default Transaction;
