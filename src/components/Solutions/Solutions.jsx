import './Solutions.css'
import phone from '../../assets/images/solutions/phone.png'
import withdraw from '../../assets/images/solutions/solution-card-image-withdraw.png'
import integrate from '../../assets/images/solutions/solution-card-integrate.png'
import visaLogo from '../../assets/images/solutions/payment-icons/visa-logo.svg'
import googlePayLogo from '../../assets/images/solutions/payment-icons/google-pay-logo.svg'
import applePayLogo from '../../assets/images/solutions/payment-icons/apple-pay-logo.svg'
import mastercardLogo from '../../assets/images/solutions/payment-icons/mastercard-logo.svg'

import tetherLogo from '../../assets/images/solutions/payment-icons/tether-logo.svg'
import dogeLogo from '../../assets/images/solutions/payment-icons/doge-logo.svg'
import shibaInuLogo from '../../assets/images/solutions/payment-icons/shiba-inu-logo.svg'
import ethereumLogo from '../../assets/images/solutions/payment-icons/ethereum-logo.svg'
import bitcoinLogo from '../../assets/images/solutions/payment-icons/bitcoin-logo.svg'
function Solutions() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header'}>
                How Streamiverse Works
            </div>
            <div className={'solutions-content'}>
                <div className={'solution-card'} id={'solution-card-1'}>
                    <div className={'card-text'}>
                        <div className={'section-subheader'}>
                            Sign Up
                        </div>
                        <div className={'section-text'}>
                            Create an account.
                        </div>
                        <button className={'button'} id={'illustration-button-top'}>Get started</button>
                        <button className={'button'} id={'illustration-button-bottom'}>Get started</button>
                    </div>
                </div>
                <div className={'solution-card'} id={'solution-card-2'}>
                    <div className={'card-text'}>
                        <div className={'section-subheader'}>
                            Integrate Tools
                        </div>
                        <div className={'section-text'}>
                            Customize your streaming setup
                        </div>
                    </div>
                    <img src={integrate} alt={'Illustration'}/>
                </div>
                <div className={'solution-card'} id={'solution-card-3'}>
                    <div className={'card-text'}>
                        <div className={'section-subheader'}>
                            Start Accepting Donations
                        </div>
                        <div className={'section-text'}>
                            Use multiple payment methods
                        </div>
                    </div>
                    <div className={'payment-methods-carousel'} id={'carousel-set-1'}>
                        <img src={tetherLogo} alt={'Tether'}/>
                        <img src={bitcoinLogo} alt={'Bitcoin'}/>
                        <img src={ethereumLogo} alt={'Ethereum'}/>
                        <img src={dogeLogo} alt={'Doge coin'}/>
                        <img src={shibaInuLogo} alt={'Shiba inu coin'}/>
                    </div>
                    <div className={'payment-methods-carousel'} id={'carousel-set-2'}>
                        <img src={tetherLogo} alt={'Tether'}/>
                        <img src={bitcoinLogo} alt={'Bitcoin'}/>
                        <img src={ethereumLogo} alt={'Ethereum'}/>
                        <img src={dogeLogo} alt={'Doge coin'}/>
                        <img src={shibaInuLogo} alt={'Shiba inu coin'}/>
                    </div>
                    <div className={'payment-methods-static'}>
                            <img src={visaLogo} alt={'Visa'}/>
                            <img src={mastercardLogo} alt={'Mastercard'}/>
                            <img src={googlePayLogo} alt={'Google Pay'}/>
                            <img src={applePayLogo} alt={'Apple Pay'}/>
                    </div>
                </div>
                <div className={'solution-card'} id={'solution-card-4'}>
                    <div className={'card-text'}>
                        <div className={'section-subheader'}>
                            Withdraw Funds Instantly
                        </div>
                        <div className={'section-text'}>
                            Access your earnings in&nbsp;real-time.
                        </div>
                        <img src={withdraw} alt={'Illustration'}/>
                    </div>
                </div>
                <div className={'solution-image'}>
                    <img src={phone} alt={'Phone'}/>
                </div>
            </div>
        </div>
    )
}

export default Solutions;