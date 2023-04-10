import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { SidebarData } from '../../data/sidebarData';

interface SidebarProps {
  sidebar: boolean;
}

const Navbar: React.FC<SidebarProps> = ({ sidebar }: SidebarProps) => (
  <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
    <ul className="nav-menu-items">
      {SidebarData.map((item) => (
        <li key={item.path} className={item.clName}>
          <Link to={item.path}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
