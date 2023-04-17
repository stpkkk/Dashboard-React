import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles';
import { Typography } from '../common';
import { IHeader } from '../../models';

const {
  background: { header },
  hover: { blueHover },
} = theme.colors;

const StyledHeader = styled.div`
  background-color: ${header};
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  .burger:hover {
    color: ${blueHover};
  }
`;

export const Header: React.FC<IHeader> = ({ setSidebar }) => (
  <StyledHeader>
    <div className="burger">
      <FaBars onClick={setSidebar} size={30} />
    </div>
    <Link to="/">
      <Typography fz={36} lh={42}>
        Dashboard
      </Typography>
    </Link>
  </StyledHeader>
);
