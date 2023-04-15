import { ChangeEvent } from 'react';
import { IOption } from './option';

export interface ISelect {
  selectValue: any;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectLabelName: string;
  selectName: string;
  options: IOption[];
}
