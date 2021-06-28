import React, { useContext, useEffect, useState } from 'react';
import './SavedArticles.css';
import '../Navigation/Navigation';
import NewsCard from '../NewsCard/NewsCard';

import { CurrentUserContext } from '../../context/CurrentUserContext';

import './SavedArticles.css';

function SavedArticles(props) {
  useEffect(() => {
    props.showSavedArticles();
  }, []);

  // const [index, setIndex] = useState(1);

  // const chunk = (arr, chunkSize = 1, cache = []) => {
  //   const tmp = [arr];
  //   if (chunkSize <= 0) return cache;
  //   while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  //   return cache;
  // };

  // const savedNewsChunks = chunk(props.savedArticles, 3 * index);
  const currentUser = useContext(CurrentUserContext);
  console.log(props);
  // const expandRows = () => {
  //   setIndex(index + 1);
  // };
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
      {/* {savedNewsChunks.length > 1 ? (
        <button className='newscards__expand' onClick={expandRows}>
          Show more
        </button>
      ) : (
        ''
      )} */}
      {/* <NewsCardList
        newsCards={props.newsCards}
        searchKeyword={props.searchKeyword}
        isLoggedIn={props.isLoggedIn}
        handleArticleSave={props.handleArticleSave}
      /> */}
    </section>
  );
}

export default SavedArticles;
