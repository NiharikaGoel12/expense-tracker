import React from "react";
import '../UI/ExpenseItem.css';
import ExpenseDate from "./Expenses/ExpenseDate";

const ExpenseItem = ({title, amount, date}) =>{

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;