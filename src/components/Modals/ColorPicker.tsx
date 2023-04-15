import React from 'react';
import { ColorResult, ChromePicker } from 'react-color';
import { IColorPicker } from '../../models';

export const ColorPicker: React.FC<IColorPicker> = ({
  setChartColor,
  chartColor,
}) => {
  const handleColorChange = (color: ColorResult) => {
    setChartColor(color.hex);
  };
  return (
    <div className="mb-3">
      <label htmlFor="chart-color" className="mb-2">
        Chart color:
      </label>
      <ChromePicker
        color={chartColor}
        onChangeComplete={handleColorChange}
        disableAlpha
      />
    </div>
  );
};
