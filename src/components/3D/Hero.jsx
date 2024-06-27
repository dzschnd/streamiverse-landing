import { Plane, Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import * as THREE from "three";
import logo from '../../assets/images/hero/hero-logo.svg';
import font from '../../assets/fonts/IBMPlexMono-Medium.ttf';

const LOGO_SCALE = 7.05;
const LOGO_WIDTH_TO_HEIGHT_RATIO = 1680 / 213;
const descriptionText = "Empowering Streamers with Next-Gen Tools and Payment Solutions";

function Hero() {
    const [logoOpacity, setLogoOpacity] = useState(0);
    const [typedText, setTypedText] = useState('');
    const [descriptionVisible, setDescriptionVisible] = useState(window.innerWidth >= 1040);

    useEffect(() => {
        const handleResize = () => {
            setDescriptionVisible(window.innerWidth >= 1040);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const logoWidth = window.innerWidth < 1920 ?
        (window.innerWidth / window.innerHeight) * (LOGO_SCALE - 1.4 * ((1920 - window.innerWidth) / 1920)) :
        (1920 / window.innerHeight) * LOGO_SCALE;
    const logoHeight = logoWidth / LOGO_WIDTH_TO_HEIGHT_RATIO;

    const descriptionFontSize = (1080/window.innerHeight) * 0.16;
    // const descriptionX = -3.3 * (window.innerWidth / 1920) + ((1920 / window.innerHeight) * LOGO_SCALE - logoWidth)/3.5;
    const descriptionX = -1.856 * (1920 / window.innerHeight);
    const descriptionY = -1 * (window.innerHeight / 1080) -0.2;

    useEffect(() => {
        let currentIndex = 0;
        let lastTime = performance.now();
        const updateText = (time) => {
            const elapsed = time - lastTime;

            if (elapsed > 30) {
                currentIndex = Math.min(currentIndex + 1, descriptionText.length);
                setTypedText(descriptionText.substring(0, currentIndex));
                lastTime = time;
            }

            if (currentIndex < descriptionText.length) {
                requestAnimationFrame(updateText);
            }
        };

        requestAnimationFrame(updateText);

        return () => cancelAnimationFrame(updateText);
    }, []);

    useEffect(() => {
        const fadeInInterval = setInterval(() => {
            if (logoOpacity < 1) {
                setLogoOpacity((prevOpacity) => prevOpacity + 0.03);
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50);

        return () => clearInterval(fadeInInterval);
    }, [logoOpacity]);

    return (
        <>
            {/*{descriptionVisible && (*/}
            {/*    <Text*/}
            {/*        position={[descriptionX, descriptionY, -15]}*/}
            {/*        font={font}*/}
            {/*        fontSize={descriptionFontSize}*/}
            {/*        fontWeight={500}*/}
            {/*        color={'#ffffff'}*/}
            {/*    >*/}
            {/*        {typedText}*/}
            {/*    </Text>*/}
            {/*)}*/}
            <Plane args={[logoWidth, logoHeight, 1, 1]} position={[0, -2.5, -15]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, logo)} transparent opacity={logoOpacity} />
            </Plane>
        </>
    );
}

export default Hero;
