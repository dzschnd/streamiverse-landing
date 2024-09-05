import './Features.css'
import {useEffect, useState} from "react";
function Features() {
    const importImages = async () => {
        const [
            appPreview
        ] = await Promise.all([
            import('../../../assets/images/features/app-preview.png'),
        ]);

        return {
            appPreview: appPreview.default,
        };
    };

    const [images, setImages] = useState({
        appPreview: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'features-wrapper section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Streamiverse Features
            </div>
            <div className={'features-description section-text text-center'}>
                <p>
                    Explore the cutting-edge features that make Streamiverse the ultimate platform for streamers
                </p>
            </div>
            <img className={'margin-inline-auto'} src={images.appPreview} alt={''}/>
        </div>
    )
}

export default Features;
