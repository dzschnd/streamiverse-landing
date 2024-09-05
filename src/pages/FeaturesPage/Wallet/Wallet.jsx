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
            <div className={'section-header-smaller text-center'}>
                <span className={'color-primary-700'}>All-in-One </span>
                <br/>
                <span>Digital&nbsp;Wallet</span>
            </div>
            <div className={'wallet-description section-text text-center'}>
                Collect and use your donations and payments effortlessly in one place
            </div>
            <img className={'margin-inline-auto'} src={images.phones} alt={''}/>
            <div className={'wallet-content'}>
                <div className={'wallet-card'}>
                    <div className={'section-subheader-smaller text-center'}>
                        Real-Time Access
                    </div>
                    <div className={'section-text text-center'}>
                        Access your funds instantly and use them as needed, whether for personal expenses or reinvestment into your streaming setup
                    </div>
                </div>
                <div className={'wallet-card'}>
                    <div className={'section-subheader-smaller text-center'}>
                        Issue Debit Card
                    </div>
                    <div className={'section-text text-center'}>
                        Get a debit card linked to your wallet for easy spending. Use it anywhere that accepts card
                        payments
                    </div>
                </div>
                <div className={'wallet-card'}>
                    <div className={'section-subheader-smaller text-center'}>
                        One-stop Solution
                    </div>
                    <div className={'section-text text-center'}>
                        Use the Streamiverse digital wallet to collect all your donations in one place. No need for
                        multiple accounts or manual tracking
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wallet;
