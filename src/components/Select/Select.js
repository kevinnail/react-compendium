import React from 'react';
import './Select.css';

export default function Select({ types, handleTypeChange }) {
  return (
    <select
      className="select"
      defaultValue="all"
      onChange={(e) => handleTypeChange(e.target.value)}
    >
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
