import { Plane, Text } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import * as THREE from "three";
import logo from '../../assets/images/hero-logo.png';

function Hero() {
    const [logoOpacity, setLogoOpacity] = useState(0);
    const LOGO_MAX_WIDTH = 16;
    const LOGO_INNER_WIDTH_SCALE = 1 / 150;
    const LOGO_WIDTH_HEIGHT_RATIO = 1680 / 213;

    const logoWidth = Math.min(useWindowSize().width * LOGO_INNER_WIDTH_SCALE, LOGO_MAX_WIDTH);
    const logoHeight = logoWidth / LOGO_WIDTH_HEIGHT_RATIO;
    const descriptionFontSize = logoWidth / 100;
    const descriptionXOffset = logoWidth === LOGO_MAX_WIDTH ? 0 : (LOGO_MAX_WIDTH - logoWidth) / 3;

    const [typedText, setTypedText] = useState('');
    const fullText = "Empowering Streamers with Next-Gen Tools and Payment Solutions";

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    useEffect(() => {
        let currentIndex = 0;
        let lastTime = performance.now();
        const updateText = (time) => {
            const elapsed = time - lastTime;

            if (elapsed > 40) {
                currentIndex = Math.min(currentIndex + 1, fullText.length);
                setTypedText(fullText.substring(0, currentIndex));
                lastTime = time;
            }

            if (currentIndex < fullText.length) {
                requestAnimationFrame(updateText);
            }
        };

        requestAnimationFrame(updateText);

        return () => cancelAnimationFrame(updateText);
    }, []);

    useEffect(() => {
        const fadeInInterval = setInterval(() => {
            if (logoOpacity < 1) {
                setLogoOpacity((prevOpacity) => prevOpacity + 0.02);
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50);

        return () => clearInterval(fadeInInterval);
    }, [logoOpacity]);

    return (
        <>
            <Text position={[-5.3 + descriptionXOffset, -1.5, -15]}
                  fontSize={descriptionFontSize}
                  fontWeight={500}
                  color={'#ffffff'}>
                  {typedText}
            </Text>
            <Plane args={[logoWidth, logoHeight, 1, 1]} position={[0, -2.5, -15]}>
                <meshStandardMaterial map={useLoader(THREE.TextureLoader, logo)} transparent opacity={logoOpacity}/>
            </Plane>
        </>
    );
}

export default Hero;
