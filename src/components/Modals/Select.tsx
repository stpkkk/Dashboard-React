import React from 'react';
import { ISelect } from '../../models';

export const Select: React.FC<ISelect> = ({
  selectValue,
  onChange,
  selectLabelName,
  selectName,
  options,
}) => (
  <div className="mb-3">
    <label htmlFor={selectName} className="form-label" aria-label={selectName}>
      {selectLabelName}
    </label>
    <select
      id={selectName}
      className="form-select"
      onChange={onChange}
      value={selectValue}
    >
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
