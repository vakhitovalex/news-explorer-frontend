import { NavLink, useParams, useLocation } from 'react-router-dom';
import logout from '../../images/logout.svg';
import './Navigation.css';

function Navigation(props) {
  const location = useLocation();
  return (
    <nav className='navbar'>
      <p className='navbar__home'>NewsExplorer</p>
      <ul className='navbar__options'>
        <NavLink
          exact
          to='/'
          className='navbar__option'
          activeClassName='navbar__option_active'
        >
          Home
        </NavLink>
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
        {/* <NavLink>
          {location.pathname === '/saved-articles' ? (
            <button className='navbar__button'>Sign In</button>
          ) : (
            <button className='navbar__button_loggedin'>Elise</button>
          )}
        </NavLink> */}

        <NavLink
          to={location.pathname === '/saved-articles' ? '/signout' : '/signin'}
          className='navbar__button-container'
        >
          {/* className={isLiked ? 'element__like-figure_active' : 'element__like-figure'} */}
          <button
            className={
              location.pathname === '/saved-articles'
                ? 'navbar__button_loggedin'
                : 'navbar__button'
            }
          >
            {location.pathname === '/saved-articles' ? `Elise` : 'Sign In'}
            <div
              className={
                location.pathname === '/saved-articles' ? 'navbar__logout' : ''
              }
            ></div>
          </button>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
