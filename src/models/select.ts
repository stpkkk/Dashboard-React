import { ChangeEvent } from 'react';
import { IOption } from './option';

export interface ISelect {
  selectValue: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectLabel: string;
  selectName: string;
  options: IOption[];
}
