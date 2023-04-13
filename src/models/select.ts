import { ChangeEvent } from 'react';
import { IOption } from './option';

export interface ISelect {
  selectValue: string | number | readonly string[] | undefined;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectLabelName: string;
  selectName: string;
  options: IOption[];
}
