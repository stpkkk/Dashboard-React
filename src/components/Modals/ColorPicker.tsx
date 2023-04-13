import React from 'react';
import { CompactPicker } from 'react-color';

type ColorPickerProps = {
  chartColor: string;
  setChartColor: (value: string) => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  setChartColor,
  chartColor,
}) => {
  const handleColorChange = (color: any) => {
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

export default ColorPicker;
