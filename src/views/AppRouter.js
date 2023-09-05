// AppRouter.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import HelloWorld from './HelloWorld';
import About from './About';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello-world" element={<HelloWorld />} />
      <Route path="/About" element={<About />} />
    </Routes>
  );
};

export default AppRouter;
