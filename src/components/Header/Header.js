import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import '../SearchForm/SearchForm';
import SearchForm from '../SearchForm/SearchForm';
function Header(props) {
  return (
    <header className='header'>
      <nav className='header__nav'>
        <p className='header__name'>NewsExplorer</p>
        <ul className='header__options'>
          <NavLink
            exact
            to='/'
            className='header__home'
            activeClassName='header__home_active'
          >
            Home
          </NavLink>
          <NavLink
            to='/savedarticles'
            className='header__saved-artciles'
            activeClassName='header__saved-articles_active'
          >
            {props.isLoggedIn ? 'Saved Articles' : ''}
          </NavLink>
          <NavLink to='/signin' className='header__button-container'>
            <button className='header__button'>
              {props.isLoggedIn ? 'Name' : 'Sign In'}
            </button>
          </NavLink>
        </ul>
      </nav>
      <div className='header__main'>
        <h1 className='header__title'>What's going on in the world?</h1>
        <h2 className='header__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </h2>
      </div>
      <SearchForm />
    </header>
  );
}

export default Header;
