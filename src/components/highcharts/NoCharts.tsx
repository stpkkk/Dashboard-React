import React from 'react';
import styled from 'styled-components';
import { HiOutlineEmojiSad } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { Typography } from '../common';

const NoChartsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoCharts: React.FC = () => (
  <NoChartsWrapper>
    <Typography m="0 0 24px">
      There are no charts! Add some charts in
      <Link to="/settings">
        &nbsp;<span>Settings!</span>
      </Link>
    </Typography>
    <HiOutlineEmojiSad size={70} />
  </NoChartsWrapper>
);
