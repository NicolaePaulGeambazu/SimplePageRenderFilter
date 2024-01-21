import React from 'react';
import { InputField } from './SearchBar.style';

interface SearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ setSearchTerm } : SearchProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search">Search Product:</label>
      <InputField
        type="text"
        id="search"
        placeholder="Enter search term..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;
