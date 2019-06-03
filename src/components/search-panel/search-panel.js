import React from 'react';

const SearchPanel = () => {
  const placeholder = 'Type here to search';
  const searchStyle =  {
    fontSize: '20px',
  };
  return (
    <input type="text"
      placeholder={placeholder}
      className="search"
      style={searchStyle}
      />
  );
}

export default SearchPanel;
