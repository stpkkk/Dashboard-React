export interface IChart {
  id: string;
  name: string;
  type: string;
  data: number[][];
  color: string;
  dataName: string;
}
export interface IChartObj {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
    dataName: string;
  };
}
