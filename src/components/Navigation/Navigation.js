import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
  const location = useLocation();
  const [isNavBarChecked, setIsNavBarChecked] = useState(false);

  function handleCheck() {
    setIsNavBarChecked(!isNavBarChecked);
    console.log(isNavBarChecked);
  }
  return (
    <nav className='navbar'>
      <p className='navbar__home'>NewsExplorer</p>
      <input
        type='checkbox'
        className='nav__checkbox'
        id='nav__ham'
        onChange={handleCheck}
        checked={isNavBarChecked}
      />
      <label htmlFor='nav__ham' className='nav__label'></label>
      <ul className='navbar__options'>
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
            className='navbar__option navbar__option_nonactive'
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
          <Link to='/' className='navbar__button-container'>
            <button
              className={
                location.pathname === '/saved-articles'
                  ? 'navbar__button_loggedin'
                  : 'navbar__button'
              }
              onClick={() => {
                props.signinClick();
                handleCheck();
              }}
            >
              {location.pathname === '/saved-articles' ? `Elise` : 'Sign In'}
              <div
                className={
                  location.pathname === '/saved-articles'
                    ? 'navbar__logout'
                    : ''
                }
              ></div>
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
