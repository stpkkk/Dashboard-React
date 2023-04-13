import React from 'react';

type InputTextType = {
  setChartName: (value: string) => void;
};

export const InputText: React.FC<InputTextType> = ({ setChartName }) => (
  <div className="mb-3 chart-name ">
    <label
      htmlFor="chart-name"
      className="form-label  mr-auto  w-100"
      aria-label="chart-name"
    >
      Chart name:
      <input
        type="text"
        id="chart-name"
        className="form-control "
        placeholder="Chart name"
        onChange={(event) => {
          setChartName(event.target.value);
        }}
      />
    </label>
  </div>
);
