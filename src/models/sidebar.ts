import { MouseEvent, KeyboardEvent } from 'react';

export interface ISidebar {
  isSidebar: boolean;
  showSidebar: (
    event: MouseEvent<HTMLAnchorElement> | KeyboardEvent<HTMLElement>
  ) => void;
}
