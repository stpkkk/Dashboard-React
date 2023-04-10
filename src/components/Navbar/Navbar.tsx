import React, { UIEventHandler, KeyboardEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { NavbarData } from '../../data';
import './Navbar.css';

interface SidebarProps {
  sidebar: boolean;
  showSidebar: UIEventHandler;
}

export const Navbar: React.FC<SidebarProps> = ({
  sidebar,
  showSidebar,
}: SidebarProps) => {
  const handleKeyDown: KeyboardEventHandler<HTMLElement> = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      showSidebar(event);
    }
  };

  return (
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
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
