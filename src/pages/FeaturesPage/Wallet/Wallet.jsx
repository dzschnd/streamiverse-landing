import './Wallet.css'
import {useEffect, useState} from "react";
function Wallet() {
    const importImages = async () => {
        const [
            phones
        ] = await Promise.all([
            import('../../../assets/images/features/feature-phones.png'),
        ]);

        return {
            phones: phones.default,
        };
    };

    const [images, setImages] = useState({
        phones: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'wallet-wrapper section-wrapper'}>
            <h1 className={'section-header-smaller text-center'}>
                <span className={'color-primary-700'}>All-in-One </span>
                <br/>
                <span>Digital&nbsp;Wallet</span>
            </h1>
            <h3 className={'wallet-description section-text text-center'}>
                Collect and use your donations and payments effortlessly in one place
            </h3>
            <img className={'margin-inline-auto'} src={images.phones} alt={''}/>
            <div className={'wallet-content'}>
                <div className={'wallet-card'}>
                    <h2 className={'section-subheader-smaller text-center'}>
                        Real-Time Access
                    </h2>
                    <p className={'section-text text-center'}>
                        Access your funds instantly and use them as needed, whether for personal expenses or
                        reinvestment into your streaming setup
                    </p>
                </div>
                <div className={'wallet-card'}>
                    <h2 className={'section-subheader-smaller text-center'}>
                        One-stop Solution
                    </h2>
                    <p className={'section-text text-center'}>
                        Use the Streamiverse digital wallet to collect all your donations in one place. No need for
                        multiple accounts or manual tracking
                    </p>
                </div>
                <div className={'wallet-card'}>
                    <h2 className={'section-subheader-smaller text-center'}>
                        Issue Debit Card
                    </h2>
                    <p className={'section-text text-center'}>
                        <span className={'color-primary-700'}>
                            Coming Soon
                        </span>
                        <br/>
                        Get a debit card linked to your wallet for easy spending. Use it anywhere that accepts card
                        payments
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Wallet;
