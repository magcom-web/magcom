import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from '../pages/Articles';




const AppRoutes = () => (
  <Routes>
    <Route path="/articles" element={<Articles />} />
  </Routes>
);

export default AppRoutes;
