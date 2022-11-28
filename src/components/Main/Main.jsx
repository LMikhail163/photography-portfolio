import Header from '../../assets/header.jpg';
import Frame1 from '../../assets/frame1.jpg';
import Frame2 from '../../assets/frame2.jpg';
import './Main.css';

const Main = () => {
    return (
        <>
            <section className='main' id='home'>
                <div className="container main__container">
                    <div className="main__left">
                        <div className="main__image-bg"></div>
                        <div className="main__image-lg">
                            <img src={Header} alt="Header" />
                        </div>
                        <div className="main__image-sm">
                            <img src={Header} alt="Header" />
                        </div>
                    </div>
                    <div className="main__right">
                        <div className="main__head">
                            <div className="empty main__empty"></div>
                            <a href='/' className='main__tag'>#Best Travel Photographer 2022</a>
                        </div>
                        <h1 className='main__title'>See The Beauty Of The World Throught My Lense</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis soluta ipsam sed quam libero, esse ex laboriosam minima, accusantium maxime voluptate at ab optio voluptatem velit. Nesciunt id dolore officiis.
                        </p>
                        <a href="mailto:Lmikhail163@mail.ru" className='main__btn-md'>Let's Talk</a>
                    </div>
                </div>
            </section>

            <div className='main__frames'>
                <div className='main__frame'>
                    <img src={Frame1} alt="Main Frame One" />
                </div>
                <div className='main__frame'>
                    <img src={Frame2} alt="Main Frame Two" />
                </div>
            </div>
            
            <a href="mailto:Lmikhail163@mail.ru" className='contact__btn main__btn'>
                <p>Contact - send me email</p>
            </a>
        </>
    )
}

export default Main