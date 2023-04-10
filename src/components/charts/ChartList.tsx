import React from 'react';
import { useSelector } from 'react-redux';
import { selectCharts } from '../../redux';
import { Chart } from './Chart';

export const ChartList: React.FC = () => {
  const chartListRedux = useSelector(selectCharts);

  return (
    <ul className="chart-list p-0">
      {chartListRedux.map(
        (chart: {
          id: string;
          name: string;
          type: string;
          data: number[][];
          color: string;
        }) => (
          <Chart key={chart.id} chart={chart} />
        )
      )}
    </ul>
  );
};