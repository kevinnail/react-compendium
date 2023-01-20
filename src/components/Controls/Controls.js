import React from 'react';
import Select from '../Select/Select';
import './Controls.css';

export default function Controls({ types, handleTypeChange }) {
  return (
    <div className="controls">
      <Select {...{ types, handleTypeChange }} />
    </div>
  );
}
