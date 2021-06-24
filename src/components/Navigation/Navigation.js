import { useState, useContext } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Navigation(props) {
  const currentUser = useContext(CurrentUserContext);
  console.log(currentUser);
  const savedArticlesUrl = useLocation().pathname;
  const [isNavBarChecked, setIsNavBarChecked] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleCheck() {
    setIsNavBarChecked(!isNavBarChecked);
  }
  return (
    <nav className='navbar'>
      <p className='navbar__home'>NewsExplorer</p>
      <input
        type='checkbox'
        className={`navbar__checkbox
        ${
          savedArticlesUrl === '/saved-articles' ? 'navbar__checkbox_dark' : ''
        }`}
        id='navbar__hamburger'
        onChange={handleCheck}
        checked={isNavBarChecked}
      />
      <label
        htmlFor='navbar__hamburger'
        className={`navbar__label
        ${savedArticlesUrl === '/saved-articles' ? 'navbar__label_dark' : ''}`}
      ></label>
      <ul
        className={`navbar__options
        ${
          savedArticlesUrl === '/saved-articles' ? 'navbar__options_dark' : ''
        }`}
      >
        <li className='navbar__link'>
          <NavLink
            exact
            to='/'
            className='navbar__option'
            activeClassName='navbar__option_active'
          >
            Home
          </NavLink>
        </li>
        <li className='navbar__link'>
          <NavLink
            exact
            to='/saved-articles'
            className={
              props.isLoggedIn
                ? 'navbar__option navbar__option_nonactive'
                : 'navbar__option_hidden'
            }
            activeClassName='navbar__option_active_dark'
          >
            Saved Articles
          </NavLink>
        </li>
        <li className='navbar__link navbar__link_button'>
          <Link
            to='/'
            className={`navbar__button-container ${
              savedArticlesUrl === '/saved-articles'
                ? 'navbar__button-container_dark'
                : ''
            }`}
          >
            <button
              className={`navbar__button ${
                savedArticlesUrl === '/saved-articles'
                  ? 'navbar__button_loggedin'
                  : ''
              }`}
              onClick={() => {
                props.signinClick();
                handleCheck();
              }}
            >
              {props.isLoggedIn ? currentUser.name : 'Sign In'}
            </button>
            <div
              className={
                props.isLoggedIn
                  ? `navbar__logout
              ${
                savedArticlesUrl === '/saved-articles' && 'navbar__logout_white'
              }`
                  : undefined
              }
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
