// import React from "react";

// function AddTransactionForm() {
//   return (
//     <div className="ui segment">
//       <form className="ui form">
//         <div className="inline fields">
//           <input type="date" name="date" />
//           <input type="text" name="description" placeholder="Description" />
//           <input type="text" name="category" placeholder="Category" />
//           <input type="number" name="amount" placeholder="Amount" step="0.01" />
//         </div>
//         <button className="ui button" type="submit">
//           Add Transaction
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddTransactionForm;

import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  // Function to handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if all fields are filled
    if (!formData.date || !formData.description || !formData.category || !formData.amount) {
      alert("Please fill out all fields");
      return;
    }
    // Convert amount to number
    const amount = parseFloat(formData.amount);
    // Call addTransaction function from parent component
    addTransaction({ ...formData, amount });
    // Clear form fields
    setFormData({ date: "", description: "", category: "", amount: "" });
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            step="0.01"
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;

