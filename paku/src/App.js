import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Form from './components/pages/SignUp/Form';
import Login from './components/pages/SignUp/Login';

function App(){
    return (
      <>
        <Router>

          <Routes>
            <Route path='/' element={<Home />} />          
            <Route path='/sign-up' element={<Form />} />
            <Route path="/login" element={<Login />} />
          </Routes>

        </Router>
      </>
    );
}

export default App;