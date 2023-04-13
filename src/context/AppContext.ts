import { createContext } from 'react';

export type GlobalContent = {
  setModal: (value: boolean) => void;
  isModal: boolean;
};

export const AppContext = createContext<GlobalContent>({
  setModal: () => {},
  isModal: false,
});
