import './Header.css'
import logo from '../../assets/images/header-logo.png'
import iconHamburger from '../../assets/images/icon-hamburger.svg'
import iconClose from '../../assets/images/icon-close.svg'
import {useState} from "react";
function Header() {
    const [mobileNavToggle, setMobileNavToggle] = useState(0);

    return (
        <div className={'section-wrapper'}>
            <div className={'header-wrapper'}>
                <a href={'#'}>
                    <img src={logo} alt={'streamiverse'}/>
                </a>
                <button className={'mobile-nav-toggle'} onClick = {() => setMobileNavToggle(!mobileNavToggle)}>
                    <img className={`icon-hamburger' ${!mobileNavToggle ? 'visible' : 'hidden'}`} src={iconHamburger} alt={'Hamburger icon'}/>
                    <img className={`icon-close' ${mobileNavToggle ? 'visible' : 'hidden'}`} src={iconClose} alt={'Close icon'}/>
                </button>
                <nav className={`nav ${mobileNavToggle ? 'visible' : ''}`}>
                    <ul className={'nav-list'} role={'list'}>
                        <li><a href={'#'}>Home</a></li>
                        <li><a href={'#'}>About</a></li>
                        <li><a href={'#'}>Features</a></li>
                        <li><a href={'#'}>Solutions</a></li>
                        <li><a href={'#'}>Community</a></li>
                        <li><a href={'#'}>Contact</a></li>
                    </ul>
                </nav>
                <button className={'button header-button'}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Header;