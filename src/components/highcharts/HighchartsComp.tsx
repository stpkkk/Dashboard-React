import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';
import { selectCharts, useAppSelector } from '../../redux';
import { Button } from '../common';
import { theme } from '../../styles';

const {
  button: { blueBtn },
  hover: { blueHover },
} = theme.colors;

export const HighchartsComp: React.FC = () => {
  const chartListRedux = useAppSelector(selectCharts);

  const options = {
    title: {
      text: 'Charts',
    },

    navigator: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    accessibility: {
      enabled: false,
    },

    xAxis: {
      title: {
        text: 'Date',
      },
      type: 'datetime',
      dateTimeLabelFormats: {
        day: '%e %b %Y',
        month: '%b %Y',
        year: '%Y',
      },
    },
    yAxis: {
      title: {
        text: 'Values',
      },
    },

    tooltip: {
      headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
      valueSuffix: ' у.е.',
      xDateFormat: '%A, %b %e',
      shared: true,
    },

    series: chartListRedux,
  };
  return (
    <>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType="stockChart"
      />
      <Link to="/settings">
        <Button
          mw={100}
          m="24px 0 0"
          p="10px 0"
          bg={blueBtn}
          hoverBg={blueHover}
          color="#fff"
        >
          Settings
        </Button>
      </Link>
    </>
  );
};
