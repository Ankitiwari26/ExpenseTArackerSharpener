import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked me!!!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click me</button>
    </Card>
  );
}

export default ExpenseItem;
