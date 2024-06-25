import './App.css';
import {Canvas, invalidate} from '@react-three/fiber';
import {Html, Scroll, ScrollControls, useScroll} from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import { getProject, val } from "@theatre/core";
import animation from './assets/animations/animation-full-v3.json';
import React, { useEffect, useState } from "react";

import Scene from "./components/3D/Scene";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Solutions from "./components/Solutions/Solutions";
import Community from "./components/Community/Community";
import Footer from "./components/Contact/Footer";

function App() {
    const [sheet, setSheet] = useState(null);
    const animationPages = 14;
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
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
                <ScrollControls pages={animationPages}
                                // key={window.innerWidth + window.innerHeight}
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
                                         style={{ marginTop: `${(animationPages - 2.5) * dimensions.height}px` }}
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
