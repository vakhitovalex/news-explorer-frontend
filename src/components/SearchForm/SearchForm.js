import { useState } from 'react';
import './SearchForm.css';

function SearchForm(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  function handleSearchKeywordChange(e) {
    setSearchKeyword(e.target.value);
  }

  return (
    <form action='' className='searchform'>
      <input
        className='searchform__input'
        placeholder='Nature'
        value={searchKeyword}
      ></input>
      <button className='searchform__submit' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
