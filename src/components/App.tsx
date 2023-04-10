import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChartsPage, AboutPage, SettingsPage } from '../pages';
import { Header, Navbar } from './index';

export const App: React.FC = () => {
  const [sidebar, isSidebar] = useState<boolean>(false);

  const showSidebar = () => {
    isSidebar(!sidebar);
  };

  return (
    <>
      <Header showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<ChartsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  );
};
