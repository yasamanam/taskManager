import React, { createContext, useReducer } from "react";

import { ExpensesReducer } from "./ExpensesReducer";

//Initial state
const initialState = {
  transactions: [
    {
      id: 1,
      text: "flower",
      amount: -20,
    },
    {
      id: 2,
      text: "salary",
      amount: 300,
    },
    {
      id: 3,
      text: "book",
      amount: -10,
    },
    {
      id: 4,
      text: "camera",
      amount: 150,
    },
  ],
};

// Create context
export const ExpensesContext = createContext(initialState);

// Provider component
export const ExpensesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ExpensesReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <ExpensesContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};
