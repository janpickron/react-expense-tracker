import React from "react";

export default function ShowExpense(props) {
  return (
    <table>
      <tr>
      <th id="date">date</th>
      <th id="type" class="center">type</th>
      <th id="amount">amount</th>   
      <th>name</th>      
      </tr>
      <tr id="if-empty">
        <td colSpan={4}>
          <span>Your added items will show up here!</span>
        </td>
      </tr>
    </table>
  );
}
