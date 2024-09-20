import './Reasons.css'
import {useEffect, useState} from "react";
function Reasons() {
    const importImages = async () => {
        const [
            globe,
            brick,
            moneyJar,
            platform,
        ] = await Promise.all([
            import('../../../../assets/images/home/reasons/globe.png'),
            import('../../../../assets/images/home/reasons/brick.png'),
            import('../../../../assets/images/home/reasons/money-jar.png'),
            import('../../../../assets/images/home/reasons/platform.png'),
        ]);

        return {
            globe: globe.default,
            brick: brick.default,
            moneyJar: moneyJar.default,
            platform: platform.default,
        };
    };

    const [images, setImages] = useState({
        globe: null,
        brick: null,
        moneyJar: null,
        platform: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'section-wrapper'}>
            <h1 className={'section-header'}>
                Why Streamiverse?
            </h1>
            <div className={'features-content'}>
                <div className={'feature-card background-gradient'} id={'gradient-upper-right'}>
                    <img id={'globe'} src={images.globe} alt={''}/>
                    <div className={'feature-text'}>
                        <h2 className={'section-subheader'}>
                            Global Payment Methods
                        </h2>
                        <p className={'section-text'}>
                            150+ payment methods and 500+ cryptocurrencies
                        </p>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-bottom'}>
                    <div className={'bricks-image'}>
                        <img id={'brick-top'} src={images.brick} alt={''}/>
                        <img id={'brick-bottom'} src={images.brick} alt={''}/>
                    </div>
                    <div className={'feature-text'}>
                        <h2 className={'section-subheader'}>
                            Customizable Notifications
                        </h2>
                        <p className={'section-text'}>
                            In-stream alerts and notifications and overlays
                        </p>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-upper-left'}>
                    <img id={'money-jar'} src={images.moneyJar} alt={''}/>
                    <div className={'feature-text'}>
                        <h2 className={'section-subheader'}>
                            Digital Asset Wallet
                        </h2>
                        <p className={'section-text'}>
                            Donations are collected in place. No need for manual withdrawals
                        </p>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-bottom'}>
                    <div className={'platform-image'}>
                        <img id={'platform-bottom'} src={images.platform} alt={''}/>
                        <img id={'platform-mid'} src={images.platform} alt={''}/>
                        <img id={'platform-top'} src={images.platform} alt={''}/>
                    </div>
                    <div className={'feature-text'}>
                        <h2 className={'section-subheader'}>
                            Integrated Platform
                        </h2>
                        <p className={'section-text'}>
                            Ultimate suite of tools for streamers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reasons;