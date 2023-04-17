import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

type Props = {
  children?: ReactNode;
  mw?: number;
  color?: string;
  m?: string;
  p: string;
  bg?: string;
  fBasis?: string;
  fGrow?: number;
  fShrink?: number;
  hoverBg?: string;
  onClick?: () => void;
  float?: string;
};

const StyledComponent = styled.button<Props>`
  width: 100%;
  border-radius: 5px;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  ${({ float }) =>
    float &&
    css`
      float: ${float};
    `};
  ${({ m }) =>
    m &&
    css`
      margin: ${m};
    `};
  ${({ p }) =>
    p &&
    css`
      padding: ${p};
    `};
  ${({ color }) =>
    color &&
    css`
      color: ${color || '#fff'};
    `};
  ${({ mw }) =>
    mw &&
    css`
      max-width: ${mw}px;
    `};
  ${({ fBasis }) =>
    fBasis &&
    css`
      flex-basis: ${fBasis}px;
    `};
  ${({ fGrow }) =>
    fGrow &&
    css`
      flex-grow: ${fGrow};
    `};
  ${({ fShrink }) =>
    fShrink &&
    css`
      flex-shrink: ${fShrink};
    `};
  ${({ bg }) =>
    bg &&
    css`
      background: ${bg};
    `};
  &:hover {
    ${({ hoverBg }) =>
      hoverBg &&
      css`
        background: ${hoverBg};
      `};
  }
`;

export const Button = (props: Props) => <StyledComponent {...props} />;
