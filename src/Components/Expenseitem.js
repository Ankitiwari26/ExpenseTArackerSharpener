import "./ExpenseItem.css";
import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div classNmae="expense-item_description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">${props.amount}</div>
        <div className="expense-item_loction">${props.location}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
