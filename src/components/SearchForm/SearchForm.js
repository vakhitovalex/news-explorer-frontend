import './SearchForm.css';

function SearchForm(props) {
  return (
    <form action='' className='searchform'>
      <input className='searchform__input' placeholder='Nature'></input>
      <button className='searchform__submit' type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;
