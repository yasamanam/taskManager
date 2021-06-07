import React from "react";

const AddTransaction = () => {
  return (
    <div>
      <h3>Add New Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter Text..." id="text" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount</label>
          <input type="text" placeholder="Enter Amount..." id="amount" />
        </div>
        <button className="btn-c">Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
