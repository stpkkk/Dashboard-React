import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewMode from '../pages/ViewMode';
import About from '../pages/About';
import Header from './Header/Header';
import Settings from '../pages/Settings';
import Navbar from './Navbar/Navbar';

export const App: React.FC = (): JSX.Element => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <Header showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar showSidebar={showSidebar} sidebar={sidebar} />
        <Routes>
          <Route path="/" element={<ViewMode />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
};
