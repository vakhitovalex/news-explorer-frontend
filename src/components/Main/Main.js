import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

function Main(props) {
  return (
    <main className='main'>
      <NewsCardList />
      <Preloader />
    </main>
  );
}
export default Main;
