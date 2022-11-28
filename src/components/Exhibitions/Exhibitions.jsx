import ev from '../../assets/ev.jpg';
import eh from '../../assets/eh.jpg';
import e1 from '../../assets/e1.jpg';
import e2 from '../../assets/e2.jpg';
import e3 from '../../assets/e3.jpg';
import e4 from '../../assets/e4.jpg';
import e5 from '../../assets/e5.jpg';

import './Exhibitions.css';

const Exhibitions = () => {
  return (
    <section id='exhibitions'>
        <div className='container exhibitions__container'>
            <h2 className='exhibitions__title'>Exhibitions</h2>
            <div className="empty exhibitions__empty"></div>
            <div className="exhibitions__head">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis libero quod quidem odio vel. Dolorum corporis ratione nobis illo eos fugit commodi temporibus reiciendis adipisci totam. Dolorum iure voluptatum quisquam?
                </p>

                <a href="mailto:Lmikhail163@mail.ru" className='contact__btn exhibitions__btn'>
                    <p>contact with me</p>
                </a>
            </div>
            <div className="exhibitions__gallery">
                <article>
                    <img src={ev} alt="exhibitions img" />
                </article>
                <article>
                    <img src={e1} alt="exhibitions img" />
                </article>
                <article>
                    <img src={e2} alt="exhibitions img" />
                </article>
                <article>
                    <img src={eh} alt="exhibitions img" />
                </article>
                <article>
                    <img src={e3} alt="exhibitions img" />
                </article>
                <article>
                    <img src={e4} alt="exhibitions img" />
                </article>
                <article>
                    <img src={e5} alt="exhibitions img" />
                </article>
            </div>
        </div>
    </section>
  )
}
export default Exhibitions