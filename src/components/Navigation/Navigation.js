import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  // const location = pathname;
  const savedArticlesUrl = useLocation().pathname;
  const [isNavBarChecked, setIsNavBarChecked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  console.log(savedArticlesUrl);

  function handleCheck() {
    setIsNavBarChecked(!isNavBarChecked);
    console.log(isNavBarChecked);
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
            to='/saved-articles'
            className={
              isLoggedIn
                ? 'navbar__option navbar__option_nonactive'
                : 'navbar__option_hidden'
            }
            activeClassName='navbar__option_active_dark'
            activeStyle={{
              color: 'black',
              borderBottom: '3px solid black',
              paddingBottom: '26px',
            }}
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
              {isLoggedIn ? `Elise` : 'Sign In'}
            </button>
            <div
              className={
                isLoggedIn &&
                `navbar__logout
              ${
                savedArticlesUrl === '/saved-articles' && 'navbar__logout_white'
              }`
              }
              //   ${location.pathname !== '/saved-articles' && 'navbar__logout_white'}
              // }
            ></div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
