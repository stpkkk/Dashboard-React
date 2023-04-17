import { ReactNode } from 'react';
import { Typography } from '../common/Typography';

type Props = {
  children: ReactNode;
};

export const PageTitle = (props: Props) => (
  <Typography fz={32} lh={40} center m="24px 0 " {...props} />
);
