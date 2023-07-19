import React from "react";
// import ProcessItem from "./ProcessItem";

export default function AddItem() {
  return (
    <div>
      <form>
        <div>
          {"Date"}: 
          <label name="Date" />
         <input type="date" id="getDate"/>
        </div>

        <div>
          {" "}
          <label name="Description" /> Description:{" "}
          <input type="text" id="getDescription"
            placeholder="Add a new expense"
          />
        </div>
        <div>
          {"Type of Payment: "}
          <label name="Type of payment" />{" "}
          <select name="type" id="getPayment">
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="debit">Debit</option>
            <option value="other">Other</option>
          </select>{" "}
        </div>
        <div>
          <label name="Amount" /> Amount:{" "}
          <input type="number" id="getAmount" placeholder="How much?" />{" "}
        </div>
      </form>
     <button onclick="btnAddTask()" id="button">Add a new expense</button> 
   
    </div>
  );
}
