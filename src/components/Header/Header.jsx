import './Header.css';
import logoFull from '../../assets/images/header/logo-accent-full.png';
import iconHamburger from '../../assets/images/header/icon-hamburger.svg';
import iconClose from '../../assets/images/header/icon-close.svg';
import React, {useEffect, useState} from "react";

function Header({scrollToSection}) {
    const [mobileNavToggle, setMobileNavToggle] = useState(false);

    const handleNavToggle = () => {
        setMobileNavToggle(!mobileNavToggle);
    };

    return (
        <div className="section-wrapper">
            <div className="header-wrapper">
                <a href="#">
                    <img className="header-logo" src={logoFull} alt="streamiverse" />
                </a>
                <button className="mobile-nav-toggle" onClick={handleNavToggle}>
                    <img className={`icon-hamburger ${!mobileNavToggle ? 'visible' : 'hidden'}`} src={iconHamburger} alt="Hamburger icon" />
                    <img className={`icon-close ${mobileNavToggle ? 'visible' : 'hidden'}`} src={iconClose} alt="Close icon" />
                </button>
                <div className={`header-nav ${mobileNavToggle ? 'visible' : ''}`}>
                    <ul className="nav-list header-nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a id="features-anchor" href="#" onClick={scrollToSection}>Features</a></li>
                        <li><a href="#">Solutions</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Contact</a></li>
                        <li>
                            <button className={'button button-gradient header-button-mobile'}>
                                <span>
                                    Get Started
                                </span>
                            </button>
                        </li>
                    </ul>
                </div>
                <button className="button button-gradient header-button">
                    <span>
                        Get Started
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Header;
