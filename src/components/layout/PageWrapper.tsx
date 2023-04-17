import styled, { css } from 'styled-components';
// import { ReactNode } from 'react';

type Props = {
  column?: boolean;
  // children: ReactNode;
  // p: string;
  // isMobile?: boolean;
  // gap?: string;
  // backgroundColor?: 'green' | 'blue' | 'red' | 'orange';
  // hideDiscount?: boolean;
  // hideBackBtn?: boolean;
  // columnCenter?: boolean;
  // indicatorPercents?: number;
};

export const PageWrapper = styled.div<Props>`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 10px;
  ${({ column }) =>
    column &&
    css`
      display: flex;
      gap: 20px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
`;
