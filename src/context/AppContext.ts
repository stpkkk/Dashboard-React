import { createContext } from 'react';

type ChartsDataType = Record<string, number[][]>;

export type GlobalContent = {
  setModal: (value: boolean) => void;
  isModal: boolean;
  chartsData: ChartsDataType;
};

export const AppContext = createContext<GlobalContent>({
  setModal: () => {},
  isModal: false,
  chartsData: {
    data1: [],
    data2: [],
    data3: [],
    data4: [],
    data5: [],
  },
});
