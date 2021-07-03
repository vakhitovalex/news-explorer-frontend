import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';

function NewsCard(props) {
  const [isSaved, setIsSaved] = useState(false);
  const savedArticlesUrl = useLocation().pathname;

  function saveCard() {
    setIsSaved(!isSaved);
    props.handleArticleSave(props.newsCard);
  }

  return (
    <div className='newscard'>
      <div
        className='newscard__image'
        style={{
          backgroundImage: `url(${
            savedArticlesUrl === '/saved-articles'
              ? props.newsCard.image
              : props.newsCard.urlToImage
          })`,
        }}
      ></div>
      <div className='newscard__links'>
        {savedArticlesUrl === '/saved-articles' && (
          <div className='newscard__description'>
            <span>{props.newsCard.keyword}</span>
          </div>
        )}

        {savedArticlesUrl === '/saved-articles' ? (
          <button
            className='newscard__remove'
            onClick={() => props.handleDeleteSavedArticle(props.newsCard._id)}
          ></button>
        ) : (
          <button
            className={
              props.isLoggedIn
                ? `newscard__save-flag
                ${isSaved && 'newscard__save-flag_saved'}`
                : `newscard__save-flag_nonactive`
            }
            onClick={props.isLoggedIn ? () => saveCard() : undefined}
          ></button>
        )}
        <span className='newscard__message'>Sign in to save</span>
      </div>

      <div className='newscard__information'>
        <p className='newscard__date'>
          {new Date(
            savedArticlesUrl === '/saved-articles'
              ? props.newsCard.date
              : props.newsCard.publishedAt
          ).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <h3 className='newscard__title'>{props.newsCard.title}</h3>
        <h4 className='newscard__subtitle'>
          {savedArticlesUrl === '/saved-articles'
            ? props.newsCard.text
            : props.newsCard.description}
        </h4>
        <p className='newscard__source'>
          {savedArticlesUrl === '/saved-articles'
            ? props.newsCard.source
            : props.newsCard.source.name}
        </p>
      </div>
    </div>
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
