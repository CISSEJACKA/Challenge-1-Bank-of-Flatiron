// import React from "react";

// function Search() {
//   return (
//     <div className="ui large fluid icon input">
//       <input
//         type="text"
//         placeholder="Search your Recent Transactions"
//         onChange={() => console.log("Searching...")}
//       />
//       <i className="circular search link icon"></i>
//     </div>
//   );
// }

// export default Search;

import React, { useState } from "react";

function Search({ handleSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    handleSearchChange(searchTerm); // Pass search term to parent component
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;

