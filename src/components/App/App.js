import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='page__container'>
        <Header />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
