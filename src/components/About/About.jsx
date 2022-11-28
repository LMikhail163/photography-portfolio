import about from '../../assets/about.jpg';
import './About.css';

const About = () => {
  return (
    <section id='about'>
      <div className="container about__container">
        <h2 className='about__title'>Abaut<br/>Diana Ayi</h2>

        <a href="mailto:Lmikhail163@mail.ru" className='contact__btn about__btn'>
          <p>contact with me</p>
        </a>

        <div className="about__left">
          <div className='about__image'>
            <div className="about__image-bg"></div>
            <div className="about__image-lg">
              <img src={about} alt="About Diana Ayi" />
            </div>
            <div className="about__image-sm">
              <img src={about} alt="About Diana Ayi" />
            </div>
          </div>
        </div>

        <div className="about__right">
          <div className="empty about__empty"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, cum voluptates, dolorem earum voluptas officia voluptatum...
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dignissimos asperiores aperiam accusamus blanditiis dicta magnam officiis quaerat ipsam molestiae perspiciatis eaque cupiditate sed, adipisci consequuntur nesciunt qui iste libero.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam dignissimos asperiores aperiam accusamus...
          </p>
        </div>
      </div>
    </section>
  )
}

export default About