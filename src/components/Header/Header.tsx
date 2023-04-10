import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../index.css';

interface HeaderProps {
  showSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ showSidebar }: HeaderProps) => (
  <header className="header d-flex justify-content-space-between align-items-center pb-2 mb-4">
    <div className="flex-fill ">
      <FaBars className="ms-5 header-icon" onClick={showSidebar} size={30} />
    </div>
    <div className="appTitle flex-shrink-1 ">
      <Link to="/">
        <h1 className="m-0 me-5 h-80px">Dashboard</h1>
      </Link>
    </div>
  </header>
);

export default Header;
