import React, { useContext } from 'react';

import './NewsCardList.css';
import notFound from '../../images/not-found.svg';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList() {
  return (
    <section className='newscards'>
      <p className='newscards__title'>Search results</p>
      <div className='newscards__list'>
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
      <button className='newscards__expand'>Show more</button>
      <div className='results'>
        <img
          className='results__image'
          alt='nothing found'
          src={notFound}
        ></img>
        <p className='results__title'>Nothing Found</p>
        <p className='results__subtitle'>
          Sorry, but nothing matched your search terms.
        </p>
      </div>
    </section>
  );
}

export default NewsCardList;
