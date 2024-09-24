import './Widgets.css'
import {useEffect, useState} from "react";
function Widgets() {
    const importImages = async () => {
        const [
            alertsBullet,
            feesBullet,
            overlaysBullet,
            paymentMethodsBullet,
            widgetsBullet,
            withdrawalsBullet,
            donationPreviewMessage,
            donationPreviewGame
        ] = await Promise.all([
            import('../../../assets/images/features/bullets/alerts-bullet.svg'),
            import('../../../assets/images/features/bullets/fees-bullet.svg'),
            import('../../../assets/images/features/bullets/overlays-bullet.svg'),
            import('../../../assets/images/features/bullets/payment-methods-bullet.svg'),
            import('../../../assets/images/features/bullets/widgets-bullet.svg'),
            import('../../../assets/images/features/bullets/withdrawals-bullet.svg'),
            import('../../../assets/images/features/donation-preview-message.png'),
            import('../../../assets/images/features/donation-preview-game.png'),
        ]);

        return {
            alertsBullet: alertsBullet.default,
            feesBullet: feesBullet.default,
            overlaysBullet: overlaysBullet.default,
            paymentMethodsBullet: paymentMethodsBullet.default,
            widgetsBullet: widgetsBullet.default,
            withdrawalsBullet: withdrawalsBullet.default,
            donationPreviewMessage: donationPreviewMessage.default,
            donationPreviewGame: donationPreviewGame.default,
        };
    };

    const [images, setImages] = useState({
        alertsBullet: null,
        feesBullet: null,
        overlaysBullet: null,
        paymentMethodsBullet: null,
        widgetsBullet: null,
        withdrawalsBullet: null,
        donationPreviewMessage: null,
        donationPreviewGame: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'widgets-wrapper section-wrapper'}>
            <h1 className={'section-header-smaller text-center'}>
                Donation Widgets
            </h1>
            <h3 className={'widgets-description section-text text-center'}>
                Show donations from viewers around the world with ease
            </h3>
            <div className={'widgets-bullets'}>
                <div className={'widgets-column-1'}>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.alertsBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Customizable Alerts
                            </h2>
                            <p className={'section-text'}>
                                Set up alerts for donations, follows, and subscriptions. Customize the appearance and
                                sound
                                to
                                match your brand
                            </p>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.overlaysBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Overlays
                            </h2>
                            <p className={'section-text'}>
                                Create interactive overlays that engage viewers with real-time data, such as recent
                                donations,
                                top supporters, and more
                            </p>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.paymentMethodsBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Multiple Payment Methods
                            </h2>
                            <p className={'section-text'}>
                                Set up your donation page to accept payments from over 150 methods, including credit
                                cards,
                                PayPal, Mastercard, Visa, PIX and 500+ cryptocurrencies
                            </p>
                        </div>
                    </div>
                </div>
                <div className={'widgets-column-2'}>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.withdrawalsBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Instant Withdrawals
                            </h2>
                            <p className={'section-text'}>
                                Instantly withdraw donations in any currency to your Streamiverse Wallet
                            </p>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.widgetsBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Widgets
                            </h2>
                            <p className={'section-text'}>
                                Use pre-built widgets for polls, in-stream stickers, and other interactive elements to
                                keep
                                your
                                audience engaged
                            </p>
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.feesBullet} alt={''}/>
                        <div>
                            <h2 className={'section-subheader-smaller'}>
                                Transparent Fees
                            </h2>
                            <p className={'section-text'}>
                                Choose who covers the transaction fees—either the donor or the streamer. Enjoy lower
                                fees
                                compared to legacy platforms
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'widgets-images'}>
                <div>
                    <img id={'donation-preview-message'} src={images.donationPreviewMessage} alt={''}/>
                </div>
                <div>
                    <img id={'donation-preview-game'} src={images.donationPreviewGame} alt={''}/>
                </div>
            </div>
        </div>
    )
}

export default Widgets;
