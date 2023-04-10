import { type ISelectModal } from '../models/models';

interface selectModalDataType {
  typeOptions: ISelectModal[];
  dataNameOptions: ISelectModal[];
}

export const selectModalData: selectModalDataType = {
  typeOptions: [
    {
      id: 0,
      label: 'spline',
      value: 'spline',
    },
    {
      id: 1,
      label: 'line',
      value: 'line',
    },
    {
      id: 2,
      label: 'area',
      value: 'area',
    },
    {
      id: 3,
      label: 'bar',
      value: 'bar',
    },
    {
      id: 4,
      label: 'pie',
      value: 'pie',
    },
    {
      id: 5,
      label: 'scatter',
      value: 'scatter',
    },
  ],

  dataNameOptions: [
    {
      id: 0,
      label: 'data1',
      value: 'data1',
    },
    {
      id: 1,
      value: 'data2',
      label: 'data2',
    },
    {
      id: 2,
      label: 'data3',
      value: 'data3',
    },
    {
      id: 3,
      label: 'data4',
      value: 'data4',
    },
    {
      id: 4,
      label: 'data5',
      value: 'data5',
    },
  ],
};
