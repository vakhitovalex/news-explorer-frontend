import './Header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>NewsExplorer</h1>
      <div className='header__nav'>
        <p className='header__home'>Home</p>
        <div className='header__button-container'>
          <button className='header__button'>Sign In</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
