import React from "react";
import ChartItem from "./ChartItem";
import { useSelector } from "react-redux";
import { selectCharts } from "../../redux/chartsSlice";

const ChartList: React.FC = () => {
  const chartListRedux = useSelector(selectCharts);

  return (
    <ul className="chart-list p-0">
      {chartListRedux.map(
        (
          chart: {
            id: string;
            name: string;
            type: string;
            data: number[][];
            color: string;
          },
          index: number
        ) => {
          return <ChartItem chart={chart} key={index} />;
        }
      )}
    </ul>
  );
};

export default ChartList;
