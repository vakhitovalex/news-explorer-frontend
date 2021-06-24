import React, { useContext } from 'react';
import './SavedArticles.css';
import '../Navigation/Navigation';
import Navigation from '../Navigation/Navigation';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedArticles(props) {
  const currentUser = useContext(CurrentUserContext);
  console.log(props);
  return (
    <section className='saved'>
      {/* <Navigation
        signinClick={props.signinClick}
        isLoggedIn={props.isLoggedIn}
      /> */}
      <div className='saved__main'>
        <h1 className='saved__title'>Saved articles</h1>
        <h2 className='saved__subtitle'>
          {currentUser.name}, you have 5 saved articles
        </h2>
        <div className='saved__search'>
          <p className='saved__search-title'>By keywords:&nbsp;</p>
          <p className='saved__search-keywords'>
            Nature, Yellowstone, and 2 other
          </p>
        </div>
      </div>
    </section>
  );
}

export default SavedArticles;
