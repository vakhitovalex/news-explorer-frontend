import { Link } from 'react-router-dom';
import './Footer.css';
import github_logo from '../../images/github.svg';
import facebook_logo from '../../images/facebook.svg';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
      <ul className='footer__combined'>
        <li className='footer__links'>
          <li>
            <Link to='/' className='footer__link'>
              Home
            </Link>
          </li>
          <li>
            <a
              target='_blank'
              href='https://practicum.yandex.com/'
              className='footer__link'
              rel='noreferrer'
            >
              Practicum by Yandex
            </a>
          </li>
        </li>
        <li className='footer__logos'>
          <li>
            <a
              target='_blank'
              href='https://github.com/vakhitovalex'
              className='footer__logo'
              rel='noreferrer'
            >
              <img src={github_logo} alt='github logo'></img>
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://facebook.com/'
              className='footer__logo'
              rel='noreferrer'
            >
              <img src={facebook_logo} alt='facebook logo'></img>
            </a>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
