import React, { useState } from 'react';
import Select from '../Select/Select';
export default function Controls({ types, handleQuery }) {
  const [searchString, setSearchString] = useState('');
  return (
    <div>
      <Select {...{ types, handleQuery }} />
      <input type="text" onChange={(e) => setSearchString(e.target.value)}></input>
      <button onClick={handleQuery(searchString)}>Search</button>
    </div>
  );
}
