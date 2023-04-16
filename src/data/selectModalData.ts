import { IOption } from '../models';

interface SelectModalDataType {
  typeOptions: IOption[];
  dataNameOptions: IOption[];
}

export const selectModalData: SelectModalDataType = {
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
      label: 'data 1',
      value: 'data-1',
    },
    {
      id: 1,
      label: 'data 2',
      value: 'data-2',
    },
    {
      id: 2,
      label: 'data 3',
      value: 'data-3',
    },
    {
      id: 3,
      label: 'data 4',
      value: 'data-4',
    },
    {
      id: 4,
      label: 'data 5',
      value: 'data-5',
    },
  ],
};
