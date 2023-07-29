import React, { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  // declare useState expense input and value are empty
  const [expenseArray, setExpenseArray] = useState([]);
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [payment, setPayment] = useState("");
  const [amount, setAmount] = useState("");

  console.log('expressArray is :' + expenseArray)
  console.log('date/desc/pay/amount :' + date, description, payment, amount)

  // Load expenses from localStorage when the app starts
  useEffect(() => {
    const itemFromLs = JSON.parse(localStorage.getItem("expenseArray"));
    setExpenseArray(itemFromLs);
  }, []);
console.log('useEffect :' + useEffect)
  // we are constructing the object that we want to add to the array
  const formObject = {
    date: date,
    description: description,
    payment: payment,
    amount: amount,
  };
console.log('formObject is: ' + formObject)
  // function handleClick call when user clicks on the Add button
  const handleClick = (event) => {
    // browser will not be refreshed so that we will not lose the current state
    event.preventDefault();

    // we need to grab all items from the inputs and add them to expenseArray
    // grab the form object - and add to the array
    setExpenseArray([...expenseArray, formObject]);
 console.log('setExpressArray is :' + setExpenseArray)
    // set localStorage here as soon as we add object to array
    localStorage.setItem(
      "expenseArray",
      JSON.stringify([...expenseArray, formObject])
    );
    console.log('localStorage setItem is ' + localStorage.setItem)
    event.target.reset();
  };
console.log('before RETURN to get value from ' + expenseArray)
  let handleClickAllClear = () => {
    console.log('localStorage clear is ' + localStorage.clear())
    localStorage.clear();
    expenseArray.clear();
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
          Clear All Expenses</button>
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
          {expenseArray && expenseArray.map((x, index) => (
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
