import './Footer.css'
import logoFull from "../../assets/images/header/logo-accent-full.png";
import twitterLogo from "../../assets/images/footer/twitter-logo.svg";
import discordLogo from "../../assets/images/footer/discord-logo.svg";
function Footer() {
    return (
        <div className={'background-neutral-500'}>
            <div id={'contact'} className={'section-wrapper'}>
                <div className={'footer-wrapper'}>
                    <img className={'footer-logo'} src={logoFull} alt={'Streamiverse'}/>
                    <div className={'nav-list footer-nav-list'}>
                        <ul className={'nav-set-1'}>
                            <li><a href={'#'}>Contact Us</a></li>
                            <li><a href={'#'}>FAQ</a></li>
                            <li><a href={'#'}>Follow Us</a></li>
                        </ul>
                        <ul className={'nav-set-2'}>
                            <li><a href={'/terms-of-service'}>Terms of Service</a></li>
                            <li><a href={'/privacy-policy'}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className={'social-media'}>
                        <a href={'#'}>
                            <img src={discordLogo} alt={'Discord'}/>
                        </a>
                        <a href={'#'}>
                            <img src={twitterLogo} alt={'Twitter'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;