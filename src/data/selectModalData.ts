import { type ISelectModal } from './../models'

interface selectModalDataType {
  typeOptions: ISelectModal[]
  dataNameOptions: ISelectModal[]
}

export const selectModalData: selectModalDataType = {
  typeOptions: [
    {
      label: 'spline',
      value: 'spline'
    },
    {
      label: 'line',
      value: 'line'
    },
    {
      label: 'area',
      value: 'area'
    },
    {
      label: 'bar',
      value: 'bar'
    },
    {
      label: 'pie',
      value: 'pie'
    },
    {
      label: 'scatter',
      value: 'scatter'
    }
  ],

  dataNameOptions: [
    {
      label: 'data1',
      value: 'data1'
    },
    {
      value: 'data2',
      label: 'data2'
    },
    {
      label: 'data3',
      value: 'data3'
    },
    {
      label: 'data4',
      value: 'data4'
    },
    {
      label: 'data5',
      value: 'data5'
    }
  ]
}
