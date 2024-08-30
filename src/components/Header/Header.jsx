import './Header.css';
import logoFull from '../../assets/images/header/logo-accent-full.png';
import burgerMenu from '../../assets/images/header/burger-menu.svg';
import closeIcon from '../../assets/images/header/close-icon-white.svg';
import {useEffect, useState} from "react";

function Header({openWidget}) {
    const [navToggle, setNavToggle] = useState(0);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 1012 ? 1 : 0);
    const handleResize = () => {
        if (window.innerWidth <= 1012)
            setSmallScreen(1);
        else {
            setSmallScreen(0);
            setNavToggle(0);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

        return (
        <div className="blur section-wrapper">
            <div className="header-wrapper">
                <a href={'/'}>
                    <img className="header-logo" src={logoFull} alt="Streamiverse"/>
                </a>
                <div className={'nav-list header-nav-list'} style={{transform: `${navToggle === 0 ? 'translateY(-100%)' : 'translateY(0)'}`}}>
                    <button className={'close-icon'} onClick={() => setNavToggle(0)}
                            style={{visibility: `${navToggle === 0 ? 'hidden' : 'visible'}`}}>
                        <img src={closeIcon} alt={'Close'}/>
                    </button>
                    <ul style={{transform: `${smallScreen === 0 ? 'translateY(100%)' : 'none'}`}}>
                        <li><a href={'/features'}>Features</a></li>
                        <li><a href={'/labs'}>Labs</a></li>
                        <li><a href={''}>Contact Us</a></li>
                    </ul>
                </div>
                <button className={'burger-menu'} onClick={() => setNavToggle(1)}
                        style={{visibility: `${navToggle === 1 ? 'hidden' : 'visible'}`}}>
                    <img src={burgerMenu} alt={'Burger Menu'}/>
                </button>
                <button className="button button-gradient header-button button-shrinkable" onClick={openWidget}>
                    <span>
                        Join the Waitlist
                    </span>
                </button>
            </div>
        </div>
        );
}

export default Header;
