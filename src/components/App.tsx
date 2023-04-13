import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChartsPage, AboutPage, SettingsPage } from '../pages';
import { Header, Navbar } from './index';
import { AppContext } from '../context';

export const App: React.FC = () => {
  const [isSidebar, setSidebar] = useState(false);
  const [isModal, setModal] = useState(false);

  const showSidebar = () => {
    setSidebar(!isSidebar);
  };

  const contextValue = useMemo(
    () => ({
      isModal,
      setModal,
    }),
    [isModal, setModal]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Header showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar isSidebar={isSidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<ChartsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
