import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SavedArticles from '../SavedArticles/SavedArticles';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import './App.css';

function App(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);

  function openSignInPopup() {
    setIsSignInPopupOpen(true);
  }
  function openSignUpPopup() {
    setIsSignUpPopupOpen(true);
  }

  function closePopup() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
  }

  useEffect(() => {
    function closePopupWithButton(e) {
      if (e.key === 'Escape') {
        closePopup();
      } else if (e.target.className.includes('modal_open')) {
        closePopup();
      }
    }
    window.addEventListener('keydown', closePopupWithButton);
    window.addEventListener('click', closePopupWithButton);
    return () => {
      window.removeEventListener('keydown', closePopupWithButton);
      window.removeEventListener('click', closePopupWithButton);
    };
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header signinClick={openSignInPopup} />
          <Main />
          <About />
          <Footer />
        </Route>
        <Route path='/saved-articles'>
          <SavedArticles signinClick={openSignInPopup} />
          <SavedNews />
          <Footer />
        </Route>
      </Switch>
      <SignInPopup
        isOpen={isSignInPopupOpen}
        onClose={closePopup}
        onLinkClick={openSignUpPopup}
      />
      <SignUpPopup
        isOpen={isSignUpPopupOpen}
        onClose={closePopup}
        onLinkClick={openSignInPopup}
      />
    </BrowserRouter>
  );
}

export default App;
