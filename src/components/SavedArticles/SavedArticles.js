import React from 'react';
import './SavedArticles.css';
import '../Navigation/Navigation';
import Navigation from '../Navigation/Navigation';
function SavedArticles(props) {
  return (
    <section className='saved'>
      <Navigation signinClick={props.signinClick} />
      <div className='saved__main'>
        <h1 className='saved__title'>Saved articles</h1>
        <h2 className='saved__subtitle'>Elise, you have 5 saved articles</h2>
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
