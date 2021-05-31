import { NavLink, Link, useParams, useLocation } from 'react-router-dom';
import logout from '../../images/logout.svg';
import './Navigation.css';

function Navigation(props) {
  const location = useLocation();
  return (
    <nav className='navbar'>
      <p className='navbar__home'>NewsExplorer</p>
      <input type='checkbox' className='nav__checkbox' id='nav__ham' />
      <label for='nav__ham' className='nav__label'></label>
      {/* </div> */}
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
          <Link className='navbar__button-container'>
            <button
              className={
                location.pathname === '/saved-articles'
                  ? 'navbar__button_loggedin'
                  : 'navbar__button'
              }
              onClick={() => props.signinClick()}
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

        {/* <NavLink>
          {location.pathname === '/saved-articles' ? (
            <button className='navbar__button'>Sign In</button>
          ) : (
            <button className='navbar__button_loggedin'>Elise</button>
          )}
        </NavLink> */}
      </ul>
      {/* <div class='hamburger'>
        <span class='bar'></span>
        <span class='bar'></span>
      </div> */}
    </nav>
  );
}

export default Navigation;
