import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children: ReactNode;
  fz?: number;
  m?: string;
  fw?: number;
  lh?: string | number;
  color?: string;
  center?: boolean;
};

const StyledComponent = styled.div<Props>`
  z-index: 1;

  ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `};
  ${({ fz }) =>
    fz &&
    css`
      font-size: ${fz}px;
    `};
  ${({ fw }) =>
    fw &&
    css`
      font-weight: ${fw};
    `};
  ${({ lh }) =>
    lh &&
    css`
      line-height: ${() => {
        if (String(lh).includes('%')) return lh;
        return `${lh}px;`;
      }};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `};
`;

export const Typography = (props: Props) => <StyledComponent {...props} />;
