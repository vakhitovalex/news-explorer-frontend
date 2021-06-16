import NewsCard from '../NewsCard/NewsCard';
import './SavedNews.css';

function SavedNews() {
  return (
    <section className='savednews'>
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
