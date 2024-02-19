import React from "react";

const SearchInput = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search for a meal..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchInput;
