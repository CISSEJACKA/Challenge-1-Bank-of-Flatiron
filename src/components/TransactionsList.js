// // import React from "react";
// // import Transaction from "./Transaction";

// // function TransactionsList() {
// //   return (
// //     <table className="ui celled striped padded table">
// //       <tbody>
// //         <tr>
// //           <th>
// //             <h3 className="ui center aligned header">Date</h3>
// //           </th>
// //           <th>
// //             <h3 className="ui center aligned header">Description</h3>
// //           </th>
// //           <th>
// //             <h3 className="ui center aligned header">Category</h3>
// //           </th>
// //           <th>
// //             <h3 className="ui center aligned header">Amount</h3>
// //           </th>
// //         </tr>
// //         {/* render a list of <Transaction> components here */}
// //       </tbody>
// //     </table>
// //   );
// // }

// // export default TransactionsList;
// import React from "react";
// import Transaction from "./Transaction";

import React, { useState } from "react";

function TransactionsList({ transactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table>
        {/* Render filteredTransactions here */}
      </table>
    </div>
  );
}

export default TransactionsList; // Ensure TransactionsList is exported as default



