import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './pages/Articles';
import Governance from './pages/Sgb';


const AppRoutes = () => (
  <Routes>
    <Route path="/articles" element={<Articles />} />
    <Route path="/sgb-records" element={<Governance/>}></Route>
  </Routes>
);

export default AppRoutes;
