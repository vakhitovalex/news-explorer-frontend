import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import placeholderImage from '../../images/placeholder.png';
import './NewsCard.css';

function NewsCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const savedArticlesUrl = useLocation().pathname;

  function saveCard() {
    setIsSaved(!isSaved);
  }

  return (
    <li className='newscard'>
      <div
        className='newscard__image'
        style={{ backgroundImage: { placeholderImage } }}
      ></div>
      <div className='newscard__links'>
        <div className='newscard__description'>
          <span>Nature</span>
        </div>

        {savedArticlesUrl === '/saved-articles' ? (
          <button className='newscard__remove'></button>
        ) : (
          <button
            className={
              isSaved ? 'newscard__save-flag_active' : 'newscard__save-flag'
            }
            onClick={() => saveCard()}
          ></button>
        )}
      </div>

      <div className='newscard__information'>
        <p className='newscard__date'>November 4, 2020</p>
        <h3 className='newscard__title'>
          Everyone Needs a Special 'Sit Spot' in Nature
        </h3>
        <h4 className='newscard__subtitle'>
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </h4>
        <p className='newscard__source'>TREEHUGGER</p>
      </div>
    </li>
  );
}

export default NewsCard;

// for future ref
// if (isSaved && locate.pathname === '/saved-articles') {
//   saveButton className = 'newscard__delete';
// } else if (isSaved && locate.pathname !== '/saved-articles') {
//   saveButton.className = 'newscard__save-flag_active';
// } else {
//   saveButton.className = 'newscard__save-flag';
// }
