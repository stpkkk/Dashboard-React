import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

interface IHeader {
  showSidebar: () => void;
}

export const Header: React.FC<IHeader> = ({ showSidebar }) => (
  <header className="header d-flex align-items-center p-4 mb-5">
    <div className="me-auto">
      <FaBars className="header-icon" onClick={showSidebar} size={30} />
    </div>
    <div className="appTitle flex-shrink-1 text-center">
      <Link to="/">
        <h1>Dashboard</h1>
      </Link>
    </div>
  </header>
);
