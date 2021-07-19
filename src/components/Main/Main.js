import React, { useContext } from 'react';
import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Main(props) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <>
      <Header
        signinClick={props.signinClick}
        searchKeyword={props.searchKeyword}
        setSearchKeyword={props.setSearchKeyword}
        searchForNewsArticles={props.searchForNewsArticles}
        isLoggedIn={props.isLoggedIn}
        handleLogout={props.handleLogout}
      />
      <main className='main'>
        {props.searchMade &&
          (props.searchInProgress ? (
            <Preloader />
          ) : (
            <NewsCardList
              newsCards={props.newsCards}
              searchKeyword={props.searchKeyword}
              isLoggedIn={props.isLoggedIn}
              handleArticleSave={props.handleArticleSave}
              // isSaved={props.isSaved}
              toggleArticle={props.toggleArticle}
              openSignUpPopup={props.openSignUpPopup}
            />
          ))}
      </main>
    </>
  );
}
export default Main;

// return (
//     <main className='main'>
//       {props.searchInProgress ? (
//         <Preloader />
//       ) : (
//         <NewsCardList
//           newsCards={props.newsCards}
//           searchKeyword={props.searchKeyword}
//         />
//       )}
//     </main>)
