import React from 'react';
import { ChromePicker, ColorResult } from 'react-color';
import { IColorPicker } from '../../models';
import { InputWrapper, Label } from '../common';

export const ColorPicker: React.FC<IColorPicker> = ({
  setChartColor,
  chartColor,
}) => {
  const handleColorChange = (color: ColorResult) => {
    setChartColor(color.hex);
  };

  return (
    <InputWrapper>
      <Label htmlFor="chart-color">Chart color:</Label>
      <ChromePicker
        color={chartColor}
        onChangeComplete={handleColorChange}
        disableAlpha
      />
    </InputWrapper>
  );
};
