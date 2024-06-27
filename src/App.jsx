import './App.css';
import { Canvas } from '@react-three/fiber';
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import animation from './assets/animations/animation-full-v10.json';
import React, { useEffect, useState } from "react";

import Scene from "./components/3D/Scene";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Solutions from "./components/Solutions/Solutions";
import Community from "./components/Community/Community";
import Footer from "./components/Contact/Footer";

function App() {
    const [sheet, setSheet] = useState(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const animationPages = 10;
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const updateScrollOffset = (width) => {
        let featuresHeight =
            width >= 1440 ? 689 :
                width >= 861 ? 1212 :
                    width >= 621 ? 1144 :
                        2190;
        let solutionsHeight =
            width >= 1440 ? 874 :
                width >= 861 ? 940 :
                    width >= 710 ? 872 :
                        width >= 621 ? 1160 :
                            1912;
        let communityHeight =
            width >= 1440 ? 1154 :
                width >= 1200 ? 950 :
                    width >= 861 ? 1100 :
                        width >= 621 ? 1010 :
                            width >= 422 ? 912 :
                                width >= 395 ? 817 :
                                    865;
        let footerHeight =
            width >= 1440 ? 151 :
                width >= 887 ? 272 :
                    width >= 428 ? 429 :
                        557;
        const newScrollOffset = featuresHeight + solutionsHeight + communityHeight + footerHeight;
        setScrollOffset(newScrollOffset);

        console.log('height: ' + width);
        console.log('featuresHeight: ' + featuresHeight);
        console.log('solutionsHeight: ' + solutionsHeight);
        console.log('communityHeight: ' + communityHeight);
        console.log('footerHeight: ' + footerHeight);
        console.log('Scroll offset: ' + newScrollOffset);
    };

    const handleResize = () => {
        const newDimensions = {
            width: window.innerWidth,
            height: window.innerHeight
        };
        setDimensions(newDimensions);
        updateScrollOffset(newDimensions.width);
    };

    useEffect(() => {
        const project = getProject('Streamiverse', { state: animation });
        const sheet = project.sheet('Scene');
        setSheet(sheet);

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={'app background-neutral-900'}>
            <Canvas id={'canvas'} gl={{ preserveDrawingBuffer: true }}>
                <ScrollControls pages={animationPages + scrollOffset / dimensions.height}
                                key={window.innerWidth + window.innerHeight}
                >
                    <Scroll>
                        <SheetProvider sheet={sheet}>
                            <Scene />
                            <Html className={'canvas-html'}>
                                <div>
                                    <div className={'sticky blur'}>
                                        <Header />
                                    </div>
                                    <div className={'background-neutral-900'}
                                         style={{ marginTop: `${animationPages * dimensions.height + scrollOffset}px` }}
                                    >
                                        <Features />
                                        <Solutions />
                                        <Community />
                                        <Footer />
                                    </div>
                                </div>
                            </Html>
                        </SheetProvider>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default App;
