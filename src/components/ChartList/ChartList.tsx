import React from 'react';
import { useSelector } from 'react-redux';
import ChartItem from './ChartItem';
import { selectCharts } from '../../redux/chartsSlice';

const ChartList: React.FC = () => {
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
          <ChartItem key={chart.id} chart={chart} />
        )
      )}
    </ul>
  );
};

export default ChartList;
