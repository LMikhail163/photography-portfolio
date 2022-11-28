import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer__head">
          <h2 className='footer__title'>Lmikhail163@mail.ru</h2>
          <a href="mailto:Lmikhail163@mail.ru" className='footer__btn'>
            <i className='uil uil-arrow-up-right'></i>
          </a>
        </div>
        <ul className='footer__links'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#exhibitions">Exhibitions</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer