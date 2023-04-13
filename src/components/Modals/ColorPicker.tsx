import React from 'react';
import { ColorResult, CompactPicker } from 'react-color';
import { IColorPicker } from '../../models';

export const ColorPicker: React.FC<IColorPicker> = ({
  setChartColor,
  chartColor,
}) => {
  const handleColorChange = (color: ColorResult) => {
    setChartColor(color.hex);
  };
  return (
    <div className="mb-3 chart-color">
      <span className="form-label" aria-label="chart-color">
        Chart color:
      </span>
      <CompactPicker
        className="w-100"
        color={chartColor}
        onChangeComplete={handleColorChange}
      />
    </div>
  );
};
