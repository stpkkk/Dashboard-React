import React from 'react';

type InputTextType = {
  setChartName: (value: string) => void;
  chartName: string;
};

export const InputText: React.FC<InputTextType> = ({
  setChartName,
  chartName,
}) => (
  <div className="mb-3">
    <label htmlFor="chart-name" className="form-label">
      Chart name:
    </label>
    <input
      type="text"
      id="chart-name"
      className="form-control"
      value={chartName}
      placeholder="Chart name"
      onChange={(event) => {
        setChartName(event.target.value);
      }}
      aria-describedby="inputGroupPrepend"
      required
    />
  </div>
);