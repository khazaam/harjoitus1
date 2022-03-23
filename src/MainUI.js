import './App.css';
import '@mui/material';
import React from 'react';
import './App.css';

import Navbar from './components';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from './pages/HomePage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import SecondAssigments from './pages/SecondAssigment';



function MainUI() {
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/'  element={<Home />} />
            <Route path="FirstPage" element={<FirstPage/>} />
            <Route path="SecondPage" element={<SecondPage/>} />
            <Route path="ThirdPage" element={<ThirdPage/>} />
            <Route path="SecondAssigments" element={<SecondAssigments/>} />
        </Routes>
    </Router>

  );
}

export default MainUI;