import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Intro from './pages/Imtro';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path='/' Component={Intro} />
      <Route path='/home' Component={Home} />
    </Routes>
  );
}

export default App;
