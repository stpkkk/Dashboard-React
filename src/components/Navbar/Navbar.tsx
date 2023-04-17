import React, { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { NavbarData } from '../../data';
import { ISidebar } from '../../models';
import { theme } from '../../styles';

const {
  background: { navbar },
  hover: { blueHover },
  text: { primary },
} = theme.colors;

const StyledNavbar = styled.nav<{ active: boolean }>`
  display: flex;
  justify-content: center;
  position: fixed;
  max-width: 200px;
  width: 100%;
  z-index: 1;
  top: 0;
  height: 100vh;
  opacity: ${(props) => (props.active ? 1 : 0)};
  visibility: ${(props) => (props.active ? 'visible' : 'hidden')};
  transition: opacity 0.5s ease-out, visibility 0.8s ease-out,
    left 0.5s ease-out;
  background: ${navbar};
  left: ${(props) => (props.active ? '0' : '-100%')};
`;

const NavbarList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${navbar};
`;

const NavbarListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 100%;
  :hover {
    background: ${blueHover};
    color: ${primary};
  }
`;

const NavbarLink = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  height: 100%;
  padding: 0 15%;
`;

export const Navbar: React.FC<ISidebar> = ({ isSidebar, setSidebar }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSidebar(event);
    }
  };

  return (
    <StyledNavbar active={isSidebar}>
      <NavbarList>
        {NavbarData.map((item) => (
          <NavbarListItem key={item.path}>
            <NavbarLink
              to={item.path}
              onClick={setSidebar}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
            >
              {item.icon}
              <span>{item.title}</span>
            </NavbarLink>
          </NavbarListItem>
        ))}
      </NavbarList>
    </StyledNavbar>
  );
};
