import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectCharts } from '../../redux';
import { ChartItem } from './ChartItem';
import { Typography } from '../common';

const StyledChartList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 0 24px;
`;

export const ChartList: React.FC = () => {
  const chartListRedux = useSelector(selectCharts);

  return (
    <>
      <Typography fz={24} m="0 0 24px">
        Chart list:
      </Typography>
      <StyledChartList>
        {chartListRedux.map(
          (chart: {
            id: string;
            name: string;
            type: string;
            data: number[][];
            color: string;
            dataName: string;
          }) => (
            <ChartItem key={chart.id} chart={chart} />
          )
        )}
      </StyledChartList>
    </>
  );
};
