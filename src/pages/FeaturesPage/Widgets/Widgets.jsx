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
            <div className={'section-header-smaller text-center'}>
                Donation Widgets
            </div>
            <div className={'widgets-description section-text text-center'}>
                Show donations from viewers around the world with ease
            </div>
            <div className={'widgets-bullets'}>
                <div className={'widgets-column-1'}>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={images.alertsBullet} alt={''}/>
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
                        <img className={'bullet'} src={images.overlaysBullet} alt={''}/>
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
                        <img className={'bullet'} src={images.paymentMethodsBullet} alt={''}/>
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
                        <img className={'bullet'} src={images.withdrawalsBullet} alt={''}/>
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
                        <img className={'bullet'} src={images.widgetsBullet} alt={''}/>
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
                        <img className={'bullet'} src={images.feesBullet} alt={''}/>
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
