import { IChart } from './chart';

export interface IModal {
  chart: IChart;
  setModalEdit: (name: boolean) => void;
  isModalEdit: boolean;
}
