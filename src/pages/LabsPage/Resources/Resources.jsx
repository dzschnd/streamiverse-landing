import './Resources.css'
import {useEffect, useState} from "react";
function Resources() {
    const importImages = async () => {
        const [
            streamerGuy,
            gears,
            stats,
            rocket,
        ] = await Promise.all([
            import('../../../assets/images/labs/labs-streamer-guy.png'),
            import('../../../assets/images/labs/gears.png'),
            import('../../../assets/images/labs/stats.png'),
            import('../../../assets/images/labs/rocket.png'),
        ]);

        return {
            streamerGuy: streamerGuy.default,
            gears: gears.default,
            stats: stats.default,
            rocket: rocket.default,
        };
    };

    const [images, setImages] = useState({
        streamerGuy: null,
        gears: null,
        stats: null,
        rocket: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'resources-wrapper section-wrapper'}>
            <div className={'resources-content'}>
                <div className={'resources-cards-big'}>
                    <div className={'resources-card'}>
                        <h1 className={'section-header-smaller'}>
                            Comprehensive Resources
                        </h1>
                        <h2 className={'section-subheader-smaller'}>
                            Access a wealth of resources designed to help you turn your ideas into thriving
                            businesses
                        </h2>
                    </div>
                    <div className={'resources-card'}>
                        <img src={images.streamerGuy} alt={''}/>
                    </div>
                </div>
                <div className={'resources-cards-small'}>
                    <div className={'resources-card'}>
                        <img src={images.gears} alt={''} id={'gears'}/>
                        <h3 className={'section-text'}>
                            Technical development tools and platforms
                        </h3>
                    </div>
                    <div className={'resources-card'}>
                        <img src={images.stats} alt={''} id={'stats'}/>
                        <h3 className={'section-text'}>
                            Business development and marketing strategies
                        </h3>
                    </div>
                    <div className={'resources-card'}>
                        <img src={images.rocket} alt={''} id={'rocket'}/>
                        <h3 className={'section-text'}>
                            Financial planning and funding opportunities
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;
