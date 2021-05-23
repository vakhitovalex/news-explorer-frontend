import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import placeholderImage from '../../images/placeholder.png';
import './NewsCard.css';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function NewsCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const locate = useLocation();

  function saveCard() {
    setIsSaved(!isSaved);
  }

  // if (isSaved && locate.pathname === '/saved-articles') {
  //   saveButton className = 'newscard__delete';
  // } else if (isSaved && locate.pathname !== '/saved-articles') {
  //   saveButton.className = 'newscard__save-flag_active';
  // } else {
  //   saveButton.className = 'newscard__save-flag';
  // }
  return (
    <div className='newscard'>
      <div
        className='newscard__image'
        style={{ backgroundImage: { placeholderImage } }}
      ></div>
      <div className='newscard__links'>
        <div className='newscard__description'>
          <span>Nature</span>
        </div>
        <div className='newscard__remove'>
          <span>Remove from saved</span>
        </div>
        <button
          className={
            isSaved ? 'newscard__save-flag_active' : 'newscard__save-flag'
          }
          onClick={() => saveCard()}
        ></button>
      </div>

      <div className='newscard__information'>
        <p className='newscard__date'>November 4, 2020</p>
        <p className='newscard__title'>
          Everyone Needs a Special 'Sit Spot' in Nature
        </p>
        <p className='newscard__subtitle'>
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className='newscard__source'>TREEHUGGER</p>
      </div>
    </div>
  );
}

export default NewsCard;
