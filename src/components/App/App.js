import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import SignInPopup from '../SignInPopup/SignInPopup';
import './App.css';

function App(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);

  function openSignInPopup() {
    setIsSignInPopupOpen(true);
  }

  function closePopup() {
    setIsSignInPopupOpen(false);
  }

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
        <SignInPopup isOpen={isSignInPopupOpen} onClose={closePopup} />
      </BrowserRouter>
    </div>
  );
}

export default App;
