import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
 import Services from '../pages/services/Services';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      {/* <Route path="*" element={<Error />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
