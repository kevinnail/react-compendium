import React from 'react';

export default function Select({ types, handleTypeChange }) {
  // console.log('select types', types);
  return (
    <select defaultValue="all" onChange={(e) => handleTypeChange(e.target.value)}>
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
