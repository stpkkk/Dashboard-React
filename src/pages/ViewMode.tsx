import React from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { useAppSelector, selectCharts } from '../redux';

export const ViewMode: React.FC = () => {
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
    <div className="container">
      <h2 className="text-center mb-4">View Mode</h2>
      {chartListRedux.length > 0 ? (
        <>
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            constructorType="stockChart"
          />
          <Link className="btn btn-primary mt-2" to="/settings">
            Settings
          </Link>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center fw-bold">
          <div>
            <p className="text-center">
              There are no charts! Add some charts in
              <Link className="text-decoration-none" to="/settings">
                &nbsp;Settings!
              </Link>
            </p>
          </div>
          <div className="mt-3">
            <HiOutlineEmojiSad size={70} />
          </div>
        </div>
      )}
    </div>
  );
};
