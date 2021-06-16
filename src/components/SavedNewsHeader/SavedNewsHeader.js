import React from 'react';
import './Header.css';

import Navigation from '../Navigation/Navigation';
function SavedNewsHeader(props) {
  return (
    <header className='savednewsheader'>
      <Navigation />
    </header>
  );
}

export default SavedNewsHeader;
