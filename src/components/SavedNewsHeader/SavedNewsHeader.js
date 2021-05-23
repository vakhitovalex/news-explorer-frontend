import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
function SavedNewsHeader(props) {
  return (
    <header className='savednewsheader'>
      <Navigation />
      {/* <SearchForm /> */}
    </header>
  );
}

export default SavedNewsHeader;
