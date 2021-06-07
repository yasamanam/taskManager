import { FaWindowClose } from "react-icons/fa";
import React from "react";

const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>{" "}
          <button className="delete-btn">
            <FaWindowClose />
          </button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
