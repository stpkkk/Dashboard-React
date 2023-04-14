import React from 'react';
import { useSelector } from 'react-redux';
import { selectCharts } from '../../redux';
import { ChartItem } from './ChartItem';

export const ChartList: React.FC = () => {
  const chartListRedux = useSelector(selectCharts);

  return (
    <ul className=" d-flex flex-column gap-3">
      {chartListRedux.map(
        (chart: {
          id: string;
          name: string;
          type: string;
          data: number[][];
          color: string;
        }) => (
          <ChartItem key={chart.id} chart={chart} />
        )
      )}
    </ul>
  );
};
