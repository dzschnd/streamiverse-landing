import './Footer.css'
import logoFull from "../../assets/images/header/logo-accent-full.png";
import twitterLogo from "../../assets/images/footer/twitter-logo.svg";
import discordLogo from "../../assets/images/footer/discord-logo.svg";
function Footer() {
    return (
        <div className={'background-neutral-500'}>
            <div id={'contact'} className={'section-wrapper'}>
                <div className={'footer-wrapper'}>
                    <a href={'/'}>
                        <img className={'footer-logo'} src={logoFull} alt={'Streamiverse'}/>
                    </a>
                    <div className={'nav-list footer-nav-list'}>
                        <ul className={'nav-set-1'}>
                            <li><a href={'/features'}>Features</a></li>
                            <li><a href={'/labs'}>Labs</a></li>
                            <li><a href={'mailto:support@streamiverse.io'}>Contact Us</a></li>
                        </ul>
                        <ul className={'nav-set-2'}>
                            <li><a href={'/terms-of-use'} target='_blank' rel="noreferrer">Terms of Use</a></li>
                            <li><a href={'/privacy-policy'} target='_blank' rel="noreferrer">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className={'social-media'}>
                        <a href={'https://discord.gg/j75schSghs'} target='_blank' rel="noreferrer">
                            <img src={discordLogo} alt={'Discord'}/>
                        </a>
                        <a href={'https://x.com/Streamiverseio'} target='_blank' rel="noreferrer">
                            <img src={twitterLogo} alt={'Twitter'}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;