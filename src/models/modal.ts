export interface IModal {
  chart: {
    id: string;
    name: string;
    type: string;
    data: number[][];
    color: string;
  };
  setModalEdit: (name: boolean) => void;
  isModalEdit?: boolean;
}
