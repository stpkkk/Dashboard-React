import { MouseEvent, KeyboardEvent } from 'react';

export interface ISidebar {
  isSidebar: boolean;
  setSidebar: (
    event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLElement>
  ) => void;
}
