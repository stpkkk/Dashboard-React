import React from 'react';
import { InputText, InputWrapper, Label } from '../common';
import { IInputName } from '../../models';

export const InputName: React.FC<IInputName> = ({
  setChartName,
  chartName,
}) => (
  <InputWrapper>
    <Label htmlFor="chart-name">Chart name:</Label>
    <InputText
      type="text"
      id="chart-name"
      value={chartName}
      placeholder="Chart name"
      onChange={(event) => {
        setChartName(event.target.value);
      }}
      required
    />
  </InputWrapper>
);
