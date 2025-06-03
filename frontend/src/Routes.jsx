import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './pages/Articles/Articles';
import Governance from './pages/Sgb/Sgb';
import ArticlePage from './pages/Articles/ArticlePage';
import ArchiveSlider from './pages/Archives/ArchiveSlider';
import Team from './components/Team/Team';
import Event from './components/EventTile/Event';

const AppRoutes = () => (
  <Routes>
    <Route path="/articles" element={<Articles />} />
    <Route path="/sgb-records" element={<Governance/>}></Route>
    <Route path="/articles/:id" element={<ArticlePage />} />
    <Route path="/previous-editions" element={<ArchiveSlider />} />
    <Route path="/team" element= {<Team />} />
    <Route path="/event-gallery" element= {<Event />} />
  </Routes>
);

export default AppRoutes;
