import { Route, Routes } from 'react-router-dom';
import { AboutPage, SettingsPage, ViewMode } from '../pages';

export const Router = () => (
  <Routes>
    <Route path="/" element={<ViewMode />} />
    <Route path="/settings" element={<SettingsPage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);
