export interface IChart {
  id: string;
  name: string;
  type: string;
  data: number[][];
  color: string;
}
export interface IChartObj {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
}
