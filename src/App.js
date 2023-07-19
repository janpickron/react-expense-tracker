import React from "react";
import ShowExpense from "./ShowExpense";
import AddItem from "./AddItem";
import "./index.css";

export default function App() {
  return (
    <div className="container">
     <h1>expense tracker app</h1>
      <h2>Add a new item:</h2>
      <AddItem />
      <ShowExpense />
      <ul id="display"></ul>
    </div>
  );
}
