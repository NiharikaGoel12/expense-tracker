import React, {useState} from "react";
import '../UI/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({title, amount, date}) =>{
  const [baseTitle, setTitle] = useState(title);


  const clickHandler = () => {
    setTitle('Updated!');
    console.log(baseTitle);
  }
  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{baseTitle}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;