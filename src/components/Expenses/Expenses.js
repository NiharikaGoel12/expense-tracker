import { useState } from 'react';
import '../UI/Expenses.css';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({expenses}) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterYearChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    return (
        <div>
        <div className='expenses'>
        <ExpensesFilter baseYear={filteredYear} onSelectedYear={filterYearChangeHandler}></ExpensesFilter>
        {expenses.map((expense) => (
            <ExpenseItem 
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}></ExpenseItem>
        ))
}
        {/* <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}></ExpenseItem>
      <ExpenseItem 
            title={expenses[1].title}
            amount={expenses[1].amount}
            date={expenses[1].date}></ExpenseItem>
      <ExpenseItem 
              title={expenses[2].title}
              amount={expenses[2].amount}
              date={expenses[2].date}></ExpenseItem>
      <ExpenseItem 
              title={expenses[3].title}
              amount={expenses[3].amount}
              date={expenses[3].date}></ExpenseItem> */}
        </div>
        </div>
    );
}


export default Expenses;