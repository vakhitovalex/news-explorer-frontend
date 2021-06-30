import React, { useContext } from 'react';

import { CurrentUserContext } from '../../context/CurrentUserContext';

function SavedNewsHeader(props) {
  const currentUser = useContext(CurrentUserContext);
  const articles = props.savedArticles;
  console.log(articles);

  const sortedKeywords = {};

  const keywords = articles.map(
    (article) =>
      article.keyword[0].toUpperCase() + article.keyword.slice(1).toLowerCase()
  );

  for (let i = 0; i < keywords.length; i++) {
    sortedKeywords[keywords[i]] = (sortedKeywords[keywords[i]] || 0) + 1;
  }

  const sortedValues = Object.keys(sortedKeywords);
  sortedValues.sort(function (a, b) {
    return sortedKeywords[b] - sortedKeywords[a];
  });

  return (
    <>
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
    </>
  );
}

export default SavedNewsHeader;
