import React, { useEffect } from 'react';
import './SavedArticles.css';
import Navigation from '../Navigation/Navigation';
import NewsCard from '../NewsCard/NewsCard';
import Footer from '../Footer/Footer';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

import './SavedArticles.css';

function SavedArticles(props) {
  useEffect(() => {
    props.showSavedArticles();
  }, []);

  return (
    <>
      <main className='saved'>
        <Navigation
          signinClick={props.signinClick}
          isLoggedIn={props.isLoggedIn}
          handleLogout={props.handleLogout}
        />
        <SavedNewsHeader savedArticles={props.savedArticles} />
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
    </>
  );
}

export default SavedArticles;
