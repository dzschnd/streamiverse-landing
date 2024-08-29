import alertsBullet from '../../../assets/images/features/bullets/alerts-bullet.svg'
import feesBullet from '../../../assets/images/features/bullets/fees-bullet.svg'
import overlaysBullet from '../../../assets/images/features/bullets/overlays-bullet.svg'
import paymentMethodsBullet from '../../../assets/images/features/bullets/payment-methods-bullet.svg'
import widgetsBullet from '../../../assets/images/features/bullets/widgets-bullet.svg'
import withdrawalsBullet from '../../../assets/images/features/bullets/withdrawals-bullet.svg'
import donationPreviewMessage from '../../../assets/images/features/donation-preview-message.png'
import donationPreviewGame from '../../../assets/images/features/donation-preview-game.png'
import './Widgets.css'
function Widgets() {
    return (
        <div className={'widgets-wrapper section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Donation Widgets
            </div>
            <div className={'widgets-description section-text text-center'}>
                Show donations from viewers around the world with ease
            </div>
            <div className={'widgets-bullets'}>
                <div className={'widgets-column-1'}>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={alertsBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Customizable Alerts
                            </div>
                            <div className={'section-text'}>
                                Set up alerts for donations, follows, and subscriptions. Customize the appearance and
                                sound
                                to
                                match your brand
                            </div>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={overlaysBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Overlays
                            </div>
                            <div className={'section-text'}>
                                Create interactive overlays that engage viewers with real-time data, such as recent
                                donations,
                                top supporters, and more
                            </div>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={paymentMethodsBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Multiple Payment Methods
                            </div>
                            <div className={'section-text'}>
                                Set up your donation page to accept payments from over 150 methods, including credit
                                cards,
                                PayPal, Mastercard, Visa, PIX and 500+ cryptocurrencies
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'widgets-column-2'}>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={withdrawalsBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Instant Withdrawals
                            </div>
                            <div className={'section-text'}>
                                Link your bank account or digital wallet to instantly withdraw donations in any currency
                            </div>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={widgetsBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Widgets
                            </div>
                            <div className={'section-text'}>
                                Use pre-built widgets for polls, in-stream stickers, and other interactive elements to
                                keep
                                your
                                audience engaged
                            </div>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={feesBullet} alt={''}/>
                        <div>
                            <div className={'section-subheader-smaller'}>
                                Transparent Fees
                            </div>
                            <div className={'section-text'}>
                                Choose who covers the transaction fees—either the donor or the streamer. Enjoy lower
                                fees
                                compared to legacy platforms
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'widgets-images'}>
                <div>
                    <img id={'donation-preview-message'} src={donationPreviewMessage} alt={''}/>
                </div>
                <div>
                    <img id={'donation-preview-game'} src={donationPreviewGame} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default Widgets;
