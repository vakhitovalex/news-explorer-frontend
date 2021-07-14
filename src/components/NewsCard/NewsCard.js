import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './NewsCard.css';

function NewsCard(props) {
  const savedArticlesUrl = useLocation().pathname;

  function handleStatusChange() {
    props.toggleArticle(props.newsCard);
  }

  console.log(props.isSaved);

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
                ${props.isSaved && 'newscard__save-flag_saved'}`
                : `newscard__save-flag_nonactive`
            }
            onClick={props.isLoggedIn ? () => handleStatusChange() : undefined}
          ></button>
        )}
        <span className='newscard__message'>Sign in to save</span>
      </div>

      <div className='newscard__information'>
        <a
          href={
            savedArticlesUrl === '/saved-articles'
              ? props.newsCard.link
              : props.newsCard.url
          }
          target='_blank'
          rel='noreferrer'
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
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
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
