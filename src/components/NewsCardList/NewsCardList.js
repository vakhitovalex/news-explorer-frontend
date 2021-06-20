import React from 'react';

import './NewsCardList.css';
import notFound from '../../images/not-found.svg';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  console.log(props.newsCards.length);
  return (
    <section className='newscards'>
      <h2 className={NewsCard ? 'newscards__title' : undefined}>
        Search results
      </h2>
      {props.newsCards.length > 0 ? (
        <ul className='newscards__list'>
          {props.newsCards.map((newsCard) => (
            <NewsCard
              key={newsCard.url}
              newsCard={newsCard}
              searchKeyword={props.searchKeyword}
            />
          ))}
        </ul>
      ) : (
        <div className='results'>
          <img
            className='results__image'
            alt='nothing found'
            src={notFound}
          ></img>
          <h3 className='results__title'>Nothing Found</h3>
          <h4 className='results__subtitle'>
            Sorry, but nothing matched your search terms.
          </h4>
        </div>
      )}
    </section>
  );
}
{
  /* <button className='newscards__expand'>Show more</button>; */
}
export default NewsCardList;
