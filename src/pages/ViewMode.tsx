import React from 'react';
import { useAppSelector, selectCharts } from '../redux';
import {
  HighchartsComp,
  NoCharts,
  PageTitle,
  PageWrapper,
} from '../components';

export const ViewMode: React.FC = () => {
  const chartListRedux = useAppSelector(selectCharts);

  return (
    <PageWrapper>
      <PageTitle>View Mode</PageTitle>
      {chartListRedux.length > 0 ? <HighchartsComp /> : <NoCharts />}
    </PageWrapper>
  );
};
