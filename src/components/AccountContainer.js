// import React from "react";
// import TransactionsList from "./TransactionsList";
// import Search from "./Search";
// import AddTransactionForm from "./AddTransactionForm";

// function AccountContainer() {
//   return (
//     <div>
//       <Search />
//       <AddTransactionForm />
//       <TransactionsList />
//     </div>
//   );
// }

// export default AccountContainer;

import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  // State for transactions
  const [transactions, setTransactions] = useState([]);

  // Function to add a new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  // State for search term
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle search term change
  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Search handleSearchChange={handleSearchChange} />
      <AddTransactionForm addTransaction={addTransaction} />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;
