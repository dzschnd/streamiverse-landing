import React, { useState, useEffect } from 'react';
import './ImageOrbit.css';

function ImageOrbit() {
    const importImages = async () => {
        const [
            logo,
            orbit1Guy,
            orbit1HeadphonesGuy,
            orbit1Girl,
            orbitDot,
            orbit2RedGirl,
            orbit2BlondeGirl,
            orbit3Guy,
            orbit3GlassesGuy
        ] = await Promise.all([
            import('../../assets/images/community/logo.svg'),
            import('../../assets/images/community/orbit-2-guy.svg'),
            import('../../assets/images/community/orbit-1-headphones-guy.svg'),
            import('../../assets/images/community/orbit-1-girl.svg'),
            import('../../assets/images/community/orbit-1-dot.svg'),
            import('../../assets/images/community/orbit-2-red-girl.svg'),
            import('../../assets/images/community/orbit-2-blonde-girl.svg'),
            import('../../assets/images/community/orbit-3-guy.svg'),
            import('../../assets/images/community/orbit-3-glasses-guy.svg')
        ]);

        return {
            logo: logo.default,
            orbit1Guy: orbit1Guy.default,
            orbit1HeadphonesGuy: orbit1HeadphonesGuy.default,
            orbit1Girl: orbit1Girl.default,
            orbitDot: orbitDot.default,
            orbit2RedGirl: orbit2RedGirl.default,
            orbit2BlondeGirl: orbit2BlondeGirl.default,
            orbit3Guy: orbit3Guy.default,
            orbit3GlassesGuy: orbit3GlassesGuy.default
        };
    };

    const [images, setImages] = useState({
        logo: null,
        orbit1Guy: null,
        orbit1HeadphonesGuy: null,
        orbit1Girl: null,
        orbitDot: null,
        orbit2RedGirl: null,
        orbit2BlondeGirl: null,
        orbit3Guy: null,
        orbit3GlassesGuy: null
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'image-orbit-wrapper'}>
            <div id={'orbit-logo'}>
                <img src={images.logo} alt={'logo'} />
            </div>
            <div className={'orbit backwards'} id={'orbit-empty'} />
            <div className={'orbit forwards'} id={'orbit-1'}>
                <img className={'planet backwards'} id={'orbit-1-guy'} src={images.orbit1Guy} alt={''} />
                <img className={'planet backwards'} id={'orbit-1-headphones-guy'} src={images.orbit1HeadphonesGuy} alt={''} />
                <img className={'planet backwards'} id={'orbit-1-girl'} src={images.orbit1Girl} alt={''} />
                <img className={'planet backwards'} id={'orbit-dot-1'} src={images.orbitDot} alt={''} />
                <img className={'planet backwards'} id={'orbit-dot-2'} src={images.orbitDot} alt={''} />
                <img className={'planet backwards'} id={'orbit-dot-3'} src={images.orbitDot} alt={''} />
            </div>
            <div className={'orbit backwards'} id={'orbit-2'}>
                <img className={'planet forwards'} id={'orbit-2-red-girl'} src={images.orbit2RedGirl} alt={''} />
                <img className={'planet forwards'} id={'orbit-2-blonde-girl'} src={images.orbit2BlondeGirl} alt={''} />
            </div>
            <div className={'orbit forwards'} id={'orbit-3'}>
                <img className={'planet backwards'} id={'orbit-3-guy'} src={images.orbit3Guy} alt={''} />
                <img className={'planet backwards'} id={'orbit-3-glasses-guy'} src={images.orbit3GlassesGuy} alt={''} />
            </div>
        </div>
    );
}

export default ImageOrbit;
