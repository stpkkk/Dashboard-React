import React from 'react';
import { InputSelect, InputWrapper, Label } from '../common';
import { ISelect } from '../../models';

export const Select: React.FC<ISelect> = ({
  selectValue,
  onChange,
  selectLabel,
  selectName,
  options,
}) => (
  <InputWrapper>
    <Label htmlFor={selectName} aria-label={selectName}>
      {selectLabel}
    </Label>
    <InputSelect id={selectName} onChange={onChange} value={selectValue}>
      {options.map((option) => (
        <option key={option.id} value={option.value}>
          {option.label}
        </option>
      ))}
    </InputSelect>
  </InputWrapper>
);
