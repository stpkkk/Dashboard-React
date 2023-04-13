import React, { KeyboardEvent } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from '../../data';
import './Navbar.css';
import { ISidebar } from '../../models';

export const Navbar: React.FC<ISidebar> = ({ isSidebar, showSidebar }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      showSidebar(event);
    }
  };

  return (
    <nav className={isSidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items">
        {NavbarData.map((item) => (
          <li key={item.path} className="nav-text">
            <Link
              to={item.path}
              onClick={showSidebar}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="button"
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
