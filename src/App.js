import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  // declare useState expense input and value are empty
  const [expenseArray, setExpenseArray] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

  // Load expenses from localStorage when the app starts
  useEffect(() => {
    const itemFromLs = JSON.parse(localStorage.getItem("expenseArray"));
    setExpenseArray(itemFromLs);
  }, []);

  // we are constructing the object that we want to add to the array
  const formObject = {
    date: date,
    description: description,
    payment: payment,
    amount: amount,
  };

  // function handleClick call when user clicks on the Add button
  const handleClick = (event) => {
    // browser will not be refreshed so that we will not lose the current state
    event.preventDefault();

    // we need to grab all items from the inputs and add them to expenseArray
    // grab the form object - and add to the array
    setExpenseArray([...expenseArray, formObject]);

    // set localStorage here as soon as we add object to array
    localStorage.setItem(
      "expenseArray",
      JSON.stringify([...expenseArray, formObject])
    );
    event.target.reset();
  };

  let handleClickAllClear = () => {
    localStorage.clear();
    expenseArray([]);
  };

  return (
    <div className="container">
      {/* function handleClick call  */}
      <form onSubmit={handleClick}>
        <h1>expense tracker app</h1>
        <h2>Add a new item:</h2>
        <div>
          Date:
          <input
            required
            type="date"
            name="date"
            id="date"
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div>
          Description:
          <input
            required
            type="text"
            name="description"
            id="getDescription"
            placeholder="Add a new expense"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div>
          Payment:
          <select
            required
            name="payment"
            id="getPayment"
            onChange={(event) => setPayment(event.target.value)}
          >
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="debit">Debit</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          Amount:
          <input
            required
            type="number"
            name="amount"
            id="getAmount"
            placeholder=" $ Amount?"
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <br /> <br />
        <button type="submit" id="button">
          Add a new expense
        </button>
        <button type="button" id="button" onClick={handleClickAllClear}>
          Clear All</button>
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
          {expenseArray.map((x, index) => (
            <tr key={index}>
              <td>{x.date}</td>
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

// homework :
// x 1. Reset every input value per input when I click on the button
// X 2. Add a button to clear all expenses from LS
// X 3. Add validation on each of the inputs
// x 4. Implement the required attribute in inputs
// 5. Update Read me
// 6. Push changes to GH
