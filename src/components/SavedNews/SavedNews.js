import NewsCard from '../NewsCard/NewsCard';
import Navigation from '../Navigation/Navigation';
import './SavedNews.css';

function SavedNews() {
  return (
    <section className='savednews'>
      <Navigation />
      <div className='newscards'>
        <div className='newscards__list'>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
