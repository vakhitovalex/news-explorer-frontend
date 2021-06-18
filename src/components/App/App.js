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
import InfoPopup from '../InfoPopup/InfoPopup';
import './App.css';
import NewsApi from '../../utils/NewsApi';

function App(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const newsApi = new NewsApi({
    baseUrl: 'https://newsapi.org/v2/everything?q=',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    apiKey: '254138f371d945dd9250e8efa292f7d4',
  });

  function openSignInPopup() {
    setIsSignInPopupOpen(true);
  }
  function openSignUpPopup() {
    setIsSignUpPopupOpen(true);
  }

  function closePopup() {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsInfoPopupOpen(false);
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

  const [searchKeyword, setSearchKeyword] = useState('');

  const [newsCards, setNewsCards] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(false);

  function searchForNewsArticles(searchKeyword) {
    setSearchInProgress(true);
    newsApi
      .getNewsArticles(searchKeyword)
      .then((data) => {
        setNewsCards(data.articles);
        setSearchInProgress(false);
      })

      .catch((err) => console.log(err));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Header
            signinClick={openSignInPopup}
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            searchForNewsArticles={searchForNewsArticles}
            // onSubmit={() => {
            //   requestNewsArticles();
            //   console.log('smth');
            // }}
            // setSearchKeyword={setSearchKeyword}
          />
          <Main
            newsCards={newsCards}
            searchKeyword={searchKeyword}
            searchInProgress={searchInProgress}
          />
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
      <InfoPopup
        onClose={closePopup}
        isRegistered={isRegistered}
        isOpen={isInfoPopupOpen}
        onLinkClick={openSignInPopup}
      />
    </BrowserRouter>
  );
}

export default App;

// function handleRegister(password, email) {
//   auth
//     .register(password, email)
//     .then((res) => {
//       if (res.ok) {
//         setIsRegistered(true);
//         setIsInfoPopupOpen(true);
//       } else {
//         setIsRegistered(false);
//         setIsInfoPopupOpen(true);
//       }
//     })
//     .catch((err) => console.log(err));
// }
