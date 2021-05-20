import React, { useContext } from 'react';
import placeholderImage from '../../images/placeholder.png';
import './NewsCard.css';
// import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function NewsCard(props) {
  return (
    <div className='newscard'>
      <button
        className={
          'newscard__save-flag'
          // isSaved ? 'newscard__save-flag_active' : 'newscard__save-flag'
        }
        // onClick={() => props.onCardSave(props.newsCard)}
      ></button>
      <div
        className='newscard__image'
        style={{ backgroundImage: { placeholderImage } }}
      ></div>
      <div className='newscard__information'>
        <p className='newscard__date'>November 4, 2020</p>
        <p className='newscard__title'>
          Everyone Needs a Special 'Sit Spot' in Nature
        </p>
        <p className='newscard__subtitle'>
          Ever since I read Richard Louv's influential book, "Last Child in the
          Woods," the idea of having a special "sit spot" has stuck with me.
          This advice, which Louv attributes to nature educator Jon Young, is
          for both adults and children to find...
        </p>
        <p className='newscard__source'>TREEHUGGER</p>
      </div>
    </div>
  );
}

export default NewsCard;
