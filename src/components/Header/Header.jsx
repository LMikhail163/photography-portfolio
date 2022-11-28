import React, { useEffect, useState } from 'react';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    const mobile = window.innerWidth <= 920 ? true : false;

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else  {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <nav className={scrolled ? "scrolled" : ""}>
            <div className="container nav__container">
                <a href="/">
                    <img src={Logo} alt="Logo" className='nav__logo'/>
                </a>

                {menuOpened === false && mobile === true  ? (
                    <button className='nav__toggle-btn' onClick={() => setMenuOpened(true)}><i class="uil uil-bars"></i></button>
                ) : (<>
                    <ul className='nav__links'>
                        <li onClick={() => setMenuOpened(false)}>
                            <a href='#home'>Home</a>
                        </li>
                        <li onClick={() => setMenuOpened(false)}>
                            <a href='#about'>Abaut</a>
                        </li>
                        <li onClick={() => setMenuOpened(false)}>
                            <a href='#gallery'>Gallery</a>
                        </li>
                        <li onClick={() => setMenuOpened(false)}>
                            <a href='#exhibitions'>Exhibitions</a>
                        </li>
                    </ul>
                            
                    <ul className='nav__socials'>
                        <li>
                            <a href="https://instagram.com/">
                                <i class="uil uil-instagram-alt"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/">
                                <i class="uil uil-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://youtube.com/" >
                                <i class="uil uil-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </>)}
            </div>
        </nav>
    )
}

export default Header