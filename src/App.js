import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Interface from './components/Interface';
import NotFound from './components/PageNotFound/NotFound';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Interface />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;