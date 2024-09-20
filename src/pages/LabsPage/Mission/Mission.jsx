import './Mission.css'
import {useEffect, useState} from "react";
function Mission() {
    const importImages = async () => {
        const [
            rocketBullet,
            astronautBullet
        ] = await Promise.all([
            import('../../../assets/images/labs/rocket-bullet.svg'),
            import('../../../assets/images/labs/astronaut-bullet.svg'),
        ]);

        return {
            rocketBullet: rocketBullet.default,
            astronautBullet: astronautBullet.default,
        };
    };

    const [images, setImages] = useState({
        rocketBullet: null,
        astronautBullet: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'mission-wrapper section-wrapper'}>
            <div className={'mission-header'}>
                <h1 className={'section-header-smaller'}>
                    Empowering<br/>Creators
                </h1>
                <p className={'section-text'}>
                    At Streamiverse Labs, our mission is to empower creators by providing the tools and resources
                    necessary to build successful technology companies. We believe in the power of influence and the
                    direct connection creators have with
                    their audience
                </p>
            </div>
            <div className={'mission-content'}>
                <div className={'bullet-point'}>
                    <img className={'bullet'} src={images.rocketBullet} alt={''}/>
                    <p className={'section-text'}>
                        We help with sales and business development for your product
                    </p>
                </div>
                <div className={'bullet-point'}>
                    <img className={'bullet'} src={images.astronautBullet} alt={''}/>
                    <p className={'section-text'}>
                        We facilitate operational and development part, you lead the strategy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission;
