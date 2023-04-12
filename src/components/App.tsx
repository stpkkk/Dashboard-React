import React, { useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChartsPage, AboutPage, SettingsPage } from '../pages';
import { Header, Navbar } from './index';
import { AppContext } from '../context';

export const App: React.FC = () => {
  const [sidebar, isSidebar] = useState<boolean>(false);
  const [isOpenPopUp, setOpenPopUp] = useState<boolean>(false);

  const showSidebar = () => {
    isSidebar(!sidebar);
  };

  const contextValue = useMemo(
    () => ({
      isOpenPopUp,
      setOpenPopUp,
    }),
    [isOpenPopUp, setOpenPopUp]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <Header showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar sidebar={sidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<ChartsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
