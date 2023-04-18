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
      labels: {
        formatter(obj: { value: number }) {
          return Highcharts.dateFormat('%d %b %Y', obj.value);
        },
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
    },

    series: chartListRedux,
  };

  console.log(chartListRedux);
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
