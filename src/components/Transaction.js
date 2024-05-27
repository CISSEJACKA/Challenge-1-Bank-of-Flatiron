// import React from "react";

// function Transaction() {
//   return (
//     <tr>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//       <td>{"your code here..."}</td>
//     </tr>
//   );
// }

// export default Transaction;

import React from "react";

function Transaction({ date, description, category, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
