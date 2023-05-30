import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Calendar } from './pages';
import './App.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Calendar />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
