import React from 'react';

export default function Select({ types }) {
  console.log('select types', types);
  return (
    <select>
      <option value="all">All</option>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
