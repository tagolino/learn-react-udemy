import { useState } from "react";

import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  const expensesFilterHandler = (filterValue) => {
    setYearFilter(filterValue);
    console.log("expenses.js");
    console.log(filterValue);
  };

  // for derived/computed state sample
  // let filterInfoText = '2019, 2021 and 2022';
  // if (yearFilter === '2019') {
  //   filterInfoText = '2020, 2021 and 2022';
  // } else if (yearFilter === '2021') {
  //   filterInfoText = '2019, 2020 and 2022';
  // } else {
  //   filterInfoText = '2019, 2020 and 2021';
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={yearFilter} onExpensesFilter={expensesFilterHandler} />
      {/* <span>Data for year {filterInfoText} are hidden!</span> */}
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />)
      )}
    </Card>
  );
}

export default Expenses;
