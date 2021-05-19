import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='page__container'>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
