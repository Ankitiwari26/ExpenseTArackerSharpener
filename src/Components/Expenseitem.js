import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.tilte);
  console.log("ExpenseItem evaluated by the react");

  const clickHandler = () => {
    setTitle("Updated!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
