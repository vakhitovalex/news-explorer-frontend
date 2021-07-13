import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './NewsCardList.css';
import notFound from '../../images/not-found.svg';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  const savedArticlesUrl = useLocation().pathname;
  const [index, setIndex] = useState(1);

  const chunk = (arr, chunkSize = 1, cache = []) => {
    const tmp = [...arr];
    if (chunkSize <= 0) return cache;
    while (tmp.length) cache.push(tmp.splice(0, chunkSize));
    return cache;
  };

  const newsChunks = chunk(props.newsCards, 3 * index);

  const expandRows = () => {
    setIndex(index + 1);
  };
  console.log(newsChunks);

  console.log(newsChunks.length);

  // console.log(props.newsCards.length);
  return (
    <section className='newscards'>
      {savedArticlesUrl !== '/saved-articles' && (
        <h2 className={NewsCard ? 'newscards__title' : undefined}>
          Search results
        </h2>
      )}
      {newsChunks.length ? (
        <ul className='newscards__list'>
          {newsChunks[0].map((newsCard) => (
            <NewsCard
              key={newsCard.url || newsCard._id}
              newsCard={newsCard}
              searchKeyword={props.searchKeyword}
              isLoggedIn={props.isLoggedIn}
              handleArticleSave={props.handleArticleSave}
              isSaved={newsCard.isSaved}
              toggleArticle={props.toggleArticle}
            />
          ))}
        </ul>
      ) : (
        <div className='results'>
          {' '}
          <img
            className='results__image'
            alt='nothing found'
            src={notFound}
          ></img>
          <h3 className='results__title'>Nothing Found</h3>{' '}
          <h4 className='results__subtitle'>
            Sorry, but nothing matched your search terms.{' '}
          </h4>{' '}
        </div>
      )}
      {newsChunks.length > 1 ? (
        <button className='newscards__expand' onClick={expandRows}>
          Show more
        </button>
      ) : (
        ''
      )}
    </section>
  );
}

export default NewsCardList;

//  {
//    props.newsCards.length > 0 ? (
//      <ul className='newscards__list'>
//        {props.newsCards.map((newsCard) => (
//          <NewsCard
//            key={newsCard.url}
//            newsCard={newsCard}
//            searchKeyword={props.searchKeyword}
//          />
//        ))}
//      </ul>
//    ) : (
//      <div className='results'>
//        <img className='results__image' alt='nothing found' src={notFound}></img>
//        <h3 className='results__title'>Nothing Found</h3>
//        <h4 className='results__subtitle'>
//          Sorry, but nothing matched your search terms.
//        </h4>
//      </div>
//    );
//  }
//  {
//    props.newsCards.length > 3 ? (
//      <button className='newscards__expand'>Show more</button>
//    ) : (
//      ''
//    );
//  }
