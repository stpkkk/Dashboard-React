import { createContext } from 'react';

export type GlobalContent = {
  setModal: (value: boolean) => void;
  isModal: boolean;
  handleKeyDown: any;
  handleClickCloseModal: any;
};

export const AppContext = createContext<GlobalContent>({
  setModal: () => {},
  isModal: false,
  handleKeyDown: () => {},
  handleClickCloseModal: () => {},
});
