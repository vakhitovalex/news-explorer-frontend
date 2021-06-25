import React, { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NewsCardList from '../NewsCardList/NewsCardList';
import './SavedNews.css';

function SavedNews(props) {
  useEffect(() => {
    props.showSavedArticles();
  }, []);

  return (
    <section className='savednews'>
      <NewsCardList
        newsCards={props.newsCards}
        searchKeyword={props.searchKeyword}
        isLoggedIn={props.isLoggedIn}
        handleArticleSave={props.handleArticleSave}
      />
    </section>
  );
}

export default SavedNews;
