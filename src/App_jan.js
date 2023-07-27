import React, { useEffect, useState } from "react";
import "./index.css";


export default function App() {
  // Load expenses from localStorage when the app starts
  const storedExpense = JSON.parse(localStorage.getItem("expenseArray"));

  // declare useState expense
  const [expenseArray, setExpenseArray] = useState(storedExpense);

  // Save expenses to localStorage whenever the expenses state changes
  useEffect(() => {
    localStorage.setItem("expenseArray", JSON.stringify(expenseArray));
  }, [expenseArray]);

  // add a new expense on top of the existing one and using setExpenseArray and previous expenseArray with new
  //  array with all of the previous expenses

  let addExpense = (x) => {
    setExpenseArray((prevExpenseArray) => {
      return [...prevExpenseArray, x];
    });
  };

  // the function handleClick call when user clicks on the button
  const handleClick = (event) => {
    // browser will not be refreshed so that we will not lose the current state
    event.preventDefault();

    // getting values from the form inputs
    const getdate = event.target.getdate.value;
    const payment = event.target.payment.value;
    const amount = event.target.amount.value;
    const description = event.target.description.value;

    // if user did not input anything in the form, alert message will pop up
    if (!getdate || !amount || !amount || !description) {
      alert("Please fill in all fields.");
      return;
    }

    // call function addExpense
    addExpense({ getdate, payment, amount, description });
    // reset all of the input fields of the form after submitting
    event.target.reset();
  };

  return (
    <div className="container">
      {/* function handleClick call  */}
      <form onSubmit={handleClick}>
        <h1>expense tracker app</h1>
        <h2>Add a new item:</h2>
        <div>
          Date: <input type="date" name="getdate" id="getDate" />
        </div>
        <div>
          Description:
          <input
            type="text"
            name="description"
            id="getDescription"
            placeholder="Add a new expense"
          />
        </div>
        <div>
          Payment:
          <select name="payment" id="getPayment">
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="debit">Debit</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          Amount:
          <input
            type="number"
            name="amount"
            id="getAmount"
            placeholder=" $ Amount?"
          />
        </div>
        <br /> <br />
        <button type="submit" id="button">
          Add a new expense
        </button>
      </form>

      <h1>Expense Tracker</h1>
      <table>
        <thead>
          <tr>
            <th id="date">date</th>
            <th id="type">type</th>
            <th id="amount">amount</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {/* loop through all of the values that is stored in the expenseArray and sorted by date */}
          {expenseArray
            // new Date => creates a brand new datestamp
            .sort((a, b) => new Date(a.getdate) - new Date(b.getdate))
            
            .map((x, index) => (
              <tr key={index}>
                <td>{x.getdate}</td>
                <td>{x.payment}</td>
                <td>${x.amount}</td>
                <td>{x.description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
