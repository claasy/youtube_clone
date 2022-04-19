import React, { useState, useEffect } from "react";
import { unstable_batchedUpdates } from "react-dom";
import Navbar from "./NavBar";

const SearchBar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={searchInput}
      />
    </div>
  );
};

export default SearchBar;
