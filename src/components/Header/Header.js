import React from 'react';
import './Header.css';
import '../Navigation/Navigation';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
function Header(props) {
  return (
    <header className='header'>
      <Navigation
        isLoggedIn={props.isLoggedIn}
        signinClick={props.signinClick}
        handleLogout={props.handleLogout}
      />
      <div className='header__main'>
        <h1 className='header__title'>What's going on in the world?</h1>
        <h2 className='header__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
      </div>
      <SearchForm
        searchKeyword={props.searchKeyword}
        setSearchKeyword={props.setSearchKeyword}
        searchForNewsArticles={props.searchForNewsArticles}
      />
    </header>
  );
}

export default Header;
