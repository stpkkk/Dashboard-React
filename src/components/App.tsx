import React, { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { ViewMode, AboutPage, SettingsPage } from '../pages';
import { Header, Navbar } from './index';
import { AppContext } from '../context';

type ChartsDataType = any;

export const App: React.FC = () => {
  const [isSidebar, setSidebar] = useState(false);
  const [isModal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartsData, setChartsData] = useState<ChartsDataType>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get('http://localhost:5000/chartsDataBase');
        setChartsData(res.data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const showSidebar = () => {
    setSidebar(!isSidebar);
  };

  const contextValue = useMemo(
    () => ({
      isModal,
      setModal,
      chartsData,
    }),
    [isModal, setModal, chartsData]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider value={contextValue}>
      <Header showSidebar={showSidebar} />
      <div className="wrapper">
        <Navbar isSidebar={isSidebar} showSidebar={showSidebar} />
        <Routes>
          <Route path="/" element={<ViewMode />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};
