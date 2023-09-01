import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [displayForm, setDisplayForm] = useState(false);
    const [enteredTitle, setEnteredTitle] = useState("");
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };
    // better approach for handling state updates that will use previous values
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => { return { ...prevState, enteredTitle: event.target.value}; });
    // };

    const [enteredAmount, setEnteredAmount] = useState("");

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredAmount: event.target.value
    //     });
    // };

    const [enteredDate, setEnteredDate] = useState("");

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         enteredDate: event.target.value
    //     });
    // };

    // shared handler function -- alternative approach
    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === "title") {
    //         setEnteredTitle(value);
    //     } else if (identifier === "date") {
    //         setEnteredDate(value);
    //     } else {
    //         setEnteredAmount(value);
    //     }
    // };
    // this will be used like this below
    // <input type="text" onChange={(event) => inputChangeHandler("title", event.target.value)} />

    const submitHandler = (event) => {
        event.preventDefault();  // prevent default behavior like page reload

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    };

    const showFormHandler = () => {
        setDisplayForm(true);
    };

    const hideFormHandler = () => {
        setDisplayForm(false);
    };

    return (
        <form onSubmit={submitHandler}>
            {displayForm ?
                <div>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label>Title</label>
                            <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Amount</label>
                            <input type="number" min="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                        </div>
                        <div className="new-expense__control">
                            <label>Date</label>
                            <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="button" onClick={hideFormHandler}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </div> :
                <div className="new-expense__buttons">
                    <button type="button" onClick={showFormHandler}>Add New Expense</button>
                </div>
            }
        </form>
    );
};

export default ExpenseForm;
