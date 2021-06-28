import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
// import SavedNews from '../SavedNews/SavedNews';
import SavedArticles from '../SavedArticles/SavedArticles';
import SignInPopup from '../SignInPopup/SignInPopup';
import SignUpPopup from '../SignUpPopup/SignUpPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import './App.css';
import NewsApi from '../../utils/NewsApi';
import MainApi from '../../utils/MainApi';
import * as auth from '../../utils/auth';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function App(props) {
  const [isSignInPopupOpen, setIsSignInPopupOpen] = useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [currentUser, setCurrentUser] = useState({});

  const [searchKeyword, setSearchKeyword] = useState('');

  const [newsCards, setNewsCards] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
  const [searchInProgress, setSearchInProgress] = useState(false);
  const [searchMade, setSearchMade] = useState(false);

  console.log(savedArticles);
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

  function searchForNewsArticles(searchKeyword) {
    setSearchMade(true);
    setSearchInProgress(true);
    newsApi
      .getNewsArticles(searchKeyword)
      .then((data) => {
        setNewsCards(data.articles);

        setSearchInProgress(false);
      })

      .catch((err) => console.log(err));
  }

  const mainApi = new MainApi({
    baseUrl: 'http://localhost:3002',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  function handleArticleSave(newsCard) {
    // Check one more time if this card was already liked
    // const isSaved = article.likes.some((i) => i === currentUser._id);
    // Send a request to the API and getting the updated card data
    mainApi
      .addArticle({
        keyword: searchKeyword,
        title: newsCard.title,
        text: newsCard.description,
        date: newsCard.publishedAt,
        source: newsCard.source.name,
        link: newsCard.url,
        image: newsCard.urlToImage,
      })
      .then((newArticle) => {
        setSavedArticles(newArticle, ...savedArticles);
      })
      //   // Create a new array based on the existing one and putting a new card into it
      //   const newCards = cards.map((item) =>
      //     item._id === card._id ? newCard : item
      //   );
      //   // Update the state
      //   setCards(newCards);
      // })
      .catch((err) => {
        console.log(err + ' in like api request');
      });
  }

  function showSavedArticles() {
    mainApi
      .getArticles()
      .then((resArticles) => {
        setSavedArticles(resArticles);
      })
      .catch((err) => {
        console.log(err + ' in showing saved articles');
      });
  }

  function handleRegister(username, email, password) {
    console.log(username, email, password);
    auth
      .register(username, email, password)
      .then((res) => {
        if (res.ok) {
          setIsRegistered(true);
          setIsInfoPopupOpen(true);
        } else {
          setIsRegistered(false);
          // setIsInfoPopupOpen(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data) {
          throw new Error('User Not Found');
        }
        if (data.token) {
          setEmail('');
          setPassword('');
          setIsLoggedIn(true);
          setToken(localStorage.setItem('token', data.token));
          setIsSignInPopupOpen(false);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    setEmail('');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
            setEmail(res.email);
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Header
              signinClick={openSignInPopup}
              searchKeyword={searchKeyword}
              setSearchKeyword={setSearchKeyword}
              searchForNewsArticles={searchForNewsArticles}
              isLoggedIn={isLoggedIn}
              handleLogout={handleLogout}
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
              searchMade={searchMade}
              isLoggedIn={isLoggedIn}
              handleArticleSave={handleArticleSave}
            />
            <About />
            <Footer />
          </Route>
          <ProtectedRoute
            path='/saved-articles'
            component={SavedArticles}
            /* <SavedArticles */
            signinClick={openSignInPopup}
            showSavedArticles={showSavedArticles}
            savedArticles={savedArticles}
            searchKeyword={searchKeyword}
            isLoggedIn={isLoggedIn}
            /* /> */
          />
          <Footer />
        </Switch>
        <SignInPopup
          isOpen={isSignInPopupOpen}
          onClose={closePopup}
          onLinkClick={openSignUpPopup}
          handleLogin={handleLogin}
        />
        <SignUpPopup
          isOpen={isSignUpPopupOpen}
          onClose={closePopup}
          onLinkClick={openSignInPopup}
          handleRegister={handleRegister}
        />
        <InfoPopup
          onClose={closePopup}
          isRegistered={isRegistered}
          isOpen={isInfoPopupOpen}
          onLinkClick={openSignInPopup}
        />
      </CurrentUserContext.Provider>
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
