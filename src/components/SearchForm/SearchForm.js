import { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  function handleSearchKeywordChange(e) {
    props.setSearchKeyword(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    props.searchForNewsArticles(props.searchKeyword);
    console.log(props.searchKeyword);
  }

  return (
    <form className='searchform' onSubmit={handleSearchSubmit}>
      <input
        className='searchform__input'
        placeholder='Nature'
        value={props.searchKeyword}
        onChange={handleSearchKeywordChange}
      ></input>
      <button className='searchform__submit'>Search</button>
    </form>
  );
}

export default SearchForm;
