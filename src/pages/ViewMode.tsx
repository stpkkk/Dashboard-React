import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import ChartList from '../components/ChartList/ChartList'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineEmojiSad } from 'react-icons/hi'
import { useAppSelector } from '../redux/hooks'
import { selectCharts } from '../redux/chartsSlice'

const ViewMode: React.FC = () => {
  const chartListRedux = useAppSelector(selectCharts)

  const options = {
    title: {
      text: 'Charts'
    },

    navigator: {
      enabled: false
    },

    credits: {
      enabled: false
    },

    xAxis: {
      title: {
        text: 'Date'
      },
      type: 'datetime',
      labels: {
        formatter: function (obj: any) {
          return Highcharts.dateFormat('%d %b %Y', obj.value)
        }
      }
    },
    yAxis: {
      title: {
        text: 'Values'
      }
    },

    tooltip: {
      headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
      valueSuffix: ' у.е.'
    },

    series: chartListRedux
  }

  return (
    <div className="home">
      <h2 className="text-center mb-4">View Mode</h2>
      {chartListRedux.length > 0
        ? (
        <>
          <div className="max-width:1200px">
            <HighchartsReact
              highcharts={Highcharts}
              options={options}
              constructorType={'stockChart'}
            />
            <div className="mt-4">
              <ChartList />
            </div>
          </div>
        </>
          )
        : (
        <>
          <div className="d-flex align-items-center justify-content-center fw-bold">
            There is no charts! Add some charts in <span></span>
            <NavLink className="text-decoration-none" to="/settings">
              Settings!
            </NavLink>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <HiOutlineEmojiSad size={70} />
          </div>
        </>
          )}
    </div>
  )
}

export default ViewMode
