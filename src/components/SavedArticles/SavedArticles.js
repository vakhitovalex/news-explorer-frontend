import React, { useContext, useEffect, useState } from 'react';
import './SavedArticles.css';
import Navigation from '../Navigation/Navigation';
import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';

import { CurrentUserContext } from '../../context/CurrentUserContext';

import './SavedArticles.css';

function SavedArticles(props) {
  useEffect(() => {
    props.showSavedArticles();
  }, []);
  const sortedKeywords = {};

  const keywords = props.savedArticles.map(
    (a) => a.keyword[0].toUpperCase() + a.keyword.slice(1).toLowerCase()
  );

  for (let i = 0; i < keywords.length; i++) {
    sortedKeywords[keywords[i]] = (sortedKeywords[keywords[i]] || 0) + 1;
  }

  const sortedValues = Object.keys(sortedKeywords);
  sortedValues.sort(function (a, b) {
    return sortedKeywords[b] - sortedKeywords[a];
  });

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='saved'>
      <Navigation
        signinClick={props.signinClick}
        isLoggedIn={props.isLoggedIn}
      />
      <div className='saved__main'>
        <h1 className='saved__title'>Saved articles</h1>
        <h2 className='saved__subtitle'>
          {currentUser.name}, you have {props.savedArticles.length} saved
          articles
        </h2>
        <div className='saved__search'>
          <p className='saved__search-title'>By keywords:&nbsp;</p>
          <p className='saved__search-keywords'>
            {sortedValues.length > 2
              ? `${sortedValues[0]}, ${sortedValues[1]}, and ${
                  sortedValues.length - 2
                } other`
              : (sortedValues.length === 2 &&
                  `${sortedValues[0]}, ${sortedValues[1]}`) ||
                `${sortedValues[0]}`}
          </p>
        </div>
      </div>
      <div className='newscards'>
        <ul className='newscards__list'>
          {props.savedArticles.map((savedArticle) => (
            <li className='newscard' key={savedArticle._id}>
              <NewsCard
                newsCard={savedArticle}
                searchKeyword={props.searchKeyword}
                isLoggedIn={props.isLoggedIn}
                handleArticleSave={props.handleArticleSave}
              />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </main>
  );
}

export default SavedArticles;
