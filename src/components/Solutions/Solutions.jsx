import React from 'react';
import './Solutions.css';

function Solutions() {
    const importImages = async () => {
        const [
            phone,
            withdraw,
            integrate,
            visaLogo,
            googlePayLogo,
            applePayLogo,
            mastercardLogo,
            tetherLogo,
            dogeLogo,
            shibaInuLogo,
            ethereumLogo,
            bitcoinLogo
        ] = await Promise.all([
            import('../../assets/images/solutions/phone.png'),
            import('../../assets/images/solutions/solution-card-image-withdraw.png'),
            import('../../assets/images/solutions/solution-card-integrate.png'),
            import('../../assets/images/solutions/payment-icons/visa-logo.svg'),
            import('../../assets/images/solutions/payment-icons/google-pay-logo.svg'),
            import('../../assets/images/solutions/payment-icons/apple-pay-logo.svg'),
            import('../../assets/images/solutions/payment-icons/mastercard-logo.svg'),
            import('../../assets/images/solutions/payment-icons/tether-logo.svg'),
            import('../../assets/images/solutions/payment-icons/doge-logo.svg'),
            import('../../assets/images/solutions/payment-icons/shiba-inu-logo.svg'),
            import('../../assets/images/solutions/payment-icons/ethereum-logo.svg'),
            import('../../assets/images/solutions/payment-icons/bitcoin-logo.svg')
        ]);

        return {
            phone: phone.default,
            withdraw: withdraw.default,
            integrate: integrate.default,
            visaLogo: visaLogo.default,
            googlePayLogo: googlePayLogo.default,
            applePayLogo: applePayLogo.default,
            mastercardLogo: mastercardLogo.default,
            tetherLogo: tetherLogo.default,
            dogeLogo: dogeLogo.default,
            shibaInuLogo: shibaInuLogo.default,
            ethereumLogo: ethereumLogo.default,
            bitcoinLogo: bitcoinLogo.default
        };
    };

    const [images, setImages] = React.useState({
        phone: null,
        withdraw: null,
        integrate: null,
        visaLogo: null,
        googlePayLogo: null,
        applePayLogo: null,
        mastercardLogo: null,
        tetherLogo: null,
        dogeLogo: null,
        shibaInuLogo: null,
        ethereumLogo: null,
        bitcoinLogo: null
    });

    React.useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

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
                    <img src={images.integrate} alt={''} />
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
                        <img src={images.tetherLogo} alt={''} />
                        <img src={images.bitcoinLogo} alt={''} />
                        <img src={images.ethereumLogo} alt={''} />
                        <img src={images.dogeLogo} alt={''} />
                        <img src={images.shibaInuLogo} alt={''} />
                    </div>
                    <div className={'payment-methods-carousel'} id={'carousel-set-2'}>
                        <img src={images.tetherLogo} alt={''} />
                        <img src={images.bitcoinLogo} alt={''} />
                        <img src={images.ethereumLogo} alt={''} />
                        <img src={images.dogeLogo} alt={''} />
                        <img src={images.shibaInuLogo} alt={''} />
                    </div>
                    <div className={'payment-methods-static'}>
                        <img src={images.visaLogo} alt={''} />
                        <img src={images.mastercardLogo} alt={''} />
                        <img src={images.googlePayLogo} alt={''} />
                        <img src={images.applePayLogo} alt={''} />
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
                        <img src={images.withdraw} alt={''} />
                    </div>
                </div>
                <div className={'solution-image'}>
                    <img src={images.phone} alt={''} />
                </div>
            </div>
        </div>
    );
}

export default Solutions;
