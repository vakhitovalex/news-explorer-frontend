import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  return (
    <div className='page__container'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header />
            <Main />
            <About />
            <Footer />
          </Route>
          <Route path='/saved-articles'>
            <SavedNews />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
