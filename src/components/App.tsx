import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { Header, Loader, Navbar } from './index';
import { AppContext } from '../context';
import { Router } from './Router';
import { GlobalStyles, theme } from '../styles';

export const App: React.FC = () => {
  const [isSidebar, setSidebar] = useState(false);
  const [isModal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [chartsData, setChartsData] = useState({});

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
    return <Loader />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={contextValue}>
        <GlobalStyles />
        <Header setSidebar={showSidebar} />
        <Navbar isSidebar={isSidebar} setSidebar={showSidebar} />
        <Router />
      </AppContext.Provider>
    </ThemeProvider>
  );
};
