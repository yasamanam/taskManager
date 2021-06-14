import React, { useContext, useState } from "react";

import { ExpensesContext } from "./../context/ExpensesContext";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(ExpensesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Enter Text..."
            id="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            placeholder="Enter Amount..."
            id="amount"
          />
        </div>
        <button type="submit" className="btn-c">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
