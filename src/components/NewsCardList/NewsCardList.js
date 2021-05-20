import React, { useContext } from 'react';

import './NewsCardList.css';

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
    </section>
  );
}

export default NewsCardList;
