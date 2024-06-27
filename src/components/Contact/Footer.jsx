import './Footer.css'
import logoFull from "../../assets/images/header/logo-accent-full.png";
import twitterLogo from "../../assets/images/footer/twitter-logo.svg";
import discordLogo from "../../assets/images/footer/discord-logo.svg";
import {Carousel} from "react-responsive-carousel";
import visaLogo from "../../assets/images/solutions/payment-icons/visa-logo.svg";
import mastercardLogo from "../../assets/images/solutions/payment-icons/mastercard-logo.svg";
import googlePayLogo from "../../assets/images/solutions/payment-icons/google-pay-logo.svg";
import applePayLogo from "../../assets/images/solutions/payment-icons/apple-pay-logo.svg";
function Footer() {
    return (
        <div className={'background-neutral-500'}>
            <div id={'contact'} className={'section-wrapper'}>
                <div className={'footer-wrapper'}>
                    <img className={'footer-logo'} src={logoFull} alt={'streamiverse'}/>
                    <div className={'nav-list footer-nav-list'}>
                        <ul className={'nav-set-1'}>
                            <li><a href={'#'}>Contact Us</a></li>
                            <li><a href={'#'}>FAQ</a></li>
                            <li><a href={'#'}>Follow Us</a></li>
                        </ul>
                        <ul className={'nav-set-2'}>
                            <li><a href={'#'}>Terms of Service</a></li>
                            <li><a href={'#'}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className={'social-media'}>
                        <a href={'https://codepen.io/alandunning/pen/bNNRvQ'}>
                            <img src={discordLogo} alt={'Discord link'}/>
                        </a>
                        <a href={'#'}>
                            <img src={twitterLogo} alt={'Twitter link'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;