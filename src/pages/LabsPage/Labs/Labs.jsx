import './Labs.css'
import {useEffect, useState} from "react";
function Labs() {
    const importImages = async () => {
        const [
            streamerGirl
        ] = await Promise.all([
            import('../../../assets/images/labs/labs-streamer-girl.png'),
        ]);

        return {
            streamerGirl: streamerGirl.default,
        };
    };

    const [images, setImages] = useState({
        streamerGirl: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'labs-wrapper section-wrapper'}>
            <div className={'section-text text-center'}>
                <span className={'color-primary-700'}>Coming Soon</span>
            </div>
            <h1 className={'section-header-smaller text-center'}>
                Streamiverse Labs
            </h1>
            <p className={'labs-description section-text text-center'}>
                Streamiverse Labs is a hub helping creators to build technology companies that leverage their influence and direct access to consumers
            </p>
            <img className={'margin-inline-auto'} src={images.streamerGirl} alt={''}/>
        </div>
    )
}

export default Labs;
