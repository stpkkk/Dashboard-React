import { createContext } from 'react';

export type GlobalContent = {
  setOpenPopUp: (value: boolean) => void;
  isOpenPopUp: boolean;
};

export const AppContext = createContext<GlobalContent>({
  setOpenPopUp: () => {},
  isOpenPopUp: false,
});
