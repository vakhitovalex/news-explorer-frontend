import author from '../../images/author.jpeg';
import './About.css';

function About(props) {
  return (
    <div className='about'>
      <img src={author} alt='an author' className='about__image'></img>
      <div className='about__author'>
        <h3 className='about__title'>About the author</h3>
        <p className='about__subtitle'>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className='about__subtitle'>
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </div>
  );
}
export default About;
