import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import Preloader from '../Preloader/Preloader';

function Main(props) {
  return (
    <main className='main'>
      {props.searchMade &&
        (props.searchInProgress ? (
          <Preloader />
        ) : (
          <NewsCardList
            newsCards={props.newsCards}
            searchKeyword={props.searchKeyword}
          />
        ))}
    </main>
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
