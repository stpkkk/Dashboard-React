import React from 'react';
import { ISelect } from '../../models';

export const Select: React.FC<ISelect> = ({
  selectValue,
  onChange,
  selectLabelName,
  selectName,
  options,
}) => (
  <div className={`mb-3 ${selectName}`}>
    <label
      htmlFor={selectName}
      className="form-label mr-auto w-100"
      aria-label={selectName}
    >
      {selectLabelName}
      <select
        id={selectName}
        className="form-select"
        onChange={onChange}
        value={selectValue}
      >
        {options.map((option) => (
          <option key={`${option.value}_${option.label}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);
