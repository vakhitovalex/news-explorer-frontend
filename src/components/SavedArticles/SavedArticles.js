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

  console.log(props.savedArticles[0]);
  console.log(props.savedArticles[1]);

  // function (array, element) {
  //   for (var i = 0; i < array.length, i++) {
  //     array
  //   }
  // }
  const arr = props.savedArticles;
  console.log(arr[0]);

  // const occurrencesOf = (number,numbers) => numbers.reduce((counter, currentNumber)=> (number === currentNumber ? counter+1 : counter),0);
  // const obj = props.savedArticles;

  // function filterSavedArticles(array, key) {
  //   array.filter((v) => v === key).length;
  // }

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
      <Footer />
    </main>
  );
}

export default SavedArticles;
