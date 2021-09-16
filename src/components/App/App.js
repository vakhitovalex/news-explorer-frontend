import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
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

  // useEffect(() => {
  //   toggleArticle();
  // }, [newsCards, searchInProgress]);

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

  const newsApi = new NewsApi({
    //GET https://newsapi.org/v2/top-headlines?country=us&apiKey=[your_key]
    //GET https://nomoreparties.co/news/v2/top-headlines?country=us&apiKey=[your_key]
    baseUrl: 'https://nomoreparties.co/news/v2/top-headlines?q=',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    apiKey: '254138f371d945dd9250e8efa292f7d4',
  });

  function searchForNewsArticles(searchKeyword) {
    setSearchMade(true);
    setSearchInProgress(true);
    newsApi
      .getNewsArticles(searchKeyword)
      .then((data) => {
        if (data.totalResults !== 0) {
          setSearchInProgress(false);
          setNewsCards(data.articles);
          localStorage.setItem('articlesFound', JSON.stringify(data.articles));
          localStorage.setItem('keyword', searchKeyword);
        } else {
          localStorage.removeItem('articlesFound');
          localStorage.removeItem('keyword');
          setSearchInProgress(false);
          setNewsCards([]);
        }
      })
      .catch((err) => console.log(err));
  }

  const mainApi = new MainApi({
    baseUrl: 'https://news-alex.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      authorization: `Bearer ${token}`,
    },
  });

  function toggleArticle(article) {
    if (article.isSaved) {
      handleDeleteSavedArticle(article._id);
      article.isSaved = false;
    } else {
      handleArticleSave(article);
      article.isSaved = true;
      console.log(article);
    }
  }

  function handleArticleSave(newsCard) {
    mainApi
      .addArticle({
        keyword: searchKeyword,
        title: newsCard.title,
        text: newsCard.description,
        date: newsCard.publishedAt,
        source: newsCard.source.name,
        link: newsCard.url,
        image: newsCard.urlToImage,
        owner: currentUser._id,
      })
      .then((newArticle) => {
        setSavedArticles([...savedArticles], newArticle);
      })
      .catch((err) => {
        console.log(err + ' in save api request');
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

  function handleDeleteSavedArticle(articleId) {
    mainApi
      .deleteArticle(articleId)
      .then(() => {
        const arrayWithoutDeletedArticle = savedArticles.filter(
          (article) => article._id !== articleId
        );
        setSavedArticles(arrayWithoutDeletedArticle);
      })
      .catch((err) => {
        console.log(err + ' in delete api request');
      });
  }

  function handleRegister(username, email, password) {
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
        console.log(data.token);
        if (data.token) {
          localStorage.setItem('token', data.token);
          setToken(localStorage.getItem('token'));
          setIsLoggedIn(true);
          setIsSignInPopupOpen(false);
          setEmail('');
          setPassword('');
        } else {
          throw new Error('User Not Found');
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('articlesFound');
    localStorage.removeItem('keyword');
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      auth
        .checkToken(token)
        .then((res) => res.json())
        .then((res) => {
          if (res) {
            setCurrentUser(res);
            showSavedArticles();
            setIsLoggedIn(true);
            // setEmail(res.email);
          } else {
            setIsLoggedIn(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const newSearchForArticles = newsCards;
  newSearchForArticles.map((newSearchArticle) => {
    // console.log(newSearchArticle); url
    savedArticles.map((savedArticle) => {
      if (savedArticle.link === newSearchArticle.url) {
        newSearchArticle._id = savedArticle._id;
        newSearchArticle.isSaved = true;
      }
    });
  });

  useEffect(() => {
    if (localStorage.getItem('articlesFound')) {
      setNewsCards(JSON.parse(localStorage.getItem('articlesFound')));
      setSearchKeyword(localStorage.getItem('keyword'));
      setSearchMade(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main
              newsCards={newsCards}
              searchKeyword={searchKeyword}
              searchInProgress={searchInProgress}
              searchMade={searchMade}
              isLoggedIn={isLoggedIn}
              handleArticleSave={handleArticleSave}
              toggleArticle={toggleArticle}
              searchForNewsArticles={searchForNewsArticles}
              handleLogout={handleLogout}
              signinClick={openSignInPopup}
              openSignUpPopup={openSignUpPopup}
              setSearchKeyword={setSearchKeyword}
            />
            <About />
            <Footer />
          </Route>
          <ProtectedRoute
            path='/saved-articles'
            component={SavedArticles}
            signinClick={openSignInPopup}
            savedArticles={savedArticles}
            searchKeyword={searchKeyword}
            isLoggedIn={isLoggedIn}
            showSavedArticles={showSavedArticles}
            handleLogout={handleLogout}
            handleDeleteSavedArticle={handleDeleteSavedArticle}
            token={token}
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
