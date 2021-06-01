import { Link } from 'react-router-dom';
import './Footer.css';
import github_logo from '../../images/github.svg';
import facebook_logo from '../../images/facebook.svg';

function Footer() {
  return (
    <div className='footer'>
      <p className='footer__copyright'>© 2021 Supersite, Powered by News API</p>
      <div className='footer__links'>
        <Link to='/' className='footer__link'>
          Home
        </Link>
        <a
          target='_blank'
          href='https://practicum.yandex.com/'
          className='footer__link'
          rel='noreferrer'
        >
          Practicum by Yandex
        </a>
        <a
          target='_blank'
          href='https://github.com/vakhitovalex'
          className='footer__logo'
          rel='noreferrer'
        >
          <img src={github_logo} alt='github logo'></img>
        </a>
        <a
          target='_blank'
          href='https://facebook.com/'
          className='footer__logo'
          rel='noreferrer'
        >
          <img src={facebook_logo} alt='facebook logo'></img>
        </a>
      </div>
    </div>
  );
}

export default Footer;
