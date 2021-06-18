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
        style={{ backgroundImage: `url(${props.newsCard.urlToImage})` }}
      ></div>
      <div className='newscard__links'>
        <div className='newscard__description'>
          <span>{props.searchKeyword}</span>
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
        <p className='newscard__date'>{props.newsCard.publishedAt}</p>
        <h3 className='newscard__title'>{props.newsCard.title}</h3>
        <h4 className='newscard__subtitle'>{props.newsCard.description}</h4>
        <p className='newscard__source'>{props.newsCard.source.name}</p>
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
