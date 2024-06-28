import { Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import React, { lazy, useEffect, useRef, useState } from 'react';
import './App.css';
import animation from './assets/animations/animation-fly-through.json';

const Scene = lazy(() => import('./components/3D/Scene'));
const Header = lazy(() => import('./components/Header/Header'));
const Features = lazy(() => import('./components/Features/Features'));
const Solutions = lazy(() => import('./components/Solutions/Solutions'));
const Community = lazy(() => import('./components/Community/Community'));
const Footer = lazy(() => import('./components/Contact/Footer'));
const WaitlistWidget = lazy(() => import('./components/Header/WaitlistWidget'));

function App() {
    const [widgetVisible, setWidgetVisible] = useState(false);
    const [sheet, setSheet] = useState(null);
    const footerRef = useRef(null);
    const [offset, setOffset] = useState(0);
    const animationPages = 20;

    useEffect(() => {
        const project = getProject('Streamiverse', { state: animation });
        const sheet = project.sheet('Scene');
        setSheet(sheet);

        setTimeout(() => {
            if (footerRef.current) setOffset(footerRef.current.getBoundingClientRect().height);
        }, 1000);
    }, []);

    return (
        <div className={'app background-neutral-900'}>
            <div className={'fixed blur'}>
                <Header openWidget={() => setWidgetVisible(true)} />
                <div
                    className={`popup ${widgetVisible ? 'visible' : ''}`}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '25%',
                        transform: 'translateX(-50%) translateY(25%)',
                    }}
                >
                    <WaitlistWidget closeWidget={() => setWidgetVisible(false)} />
                </div>
            </div>
            <Canvas id={'canvas'} gl={{ preserveDrawingBuffer: true }}>
                <ScrollControls pages={animationPages}>
                    <Scroll>
                        <SheetProvider sheet={sheet}>
                            <Scene />
                        </SheetProvider>
                    </Scroll>
                    <Scroll
                        html
                        style={{
                            width: '100%',
                        }}
                    >
                        <div
                            className={'background-neutral-900'}
                            style={{
                                marginTop: `calc(${animationPages * 100}vh - ${offset}px)`,
                            }}
                            ref={footerRef}
                        >
                            <Features />
                            <Solutions />
                            <Community openWidget={() => setWidgetVisible(true)} />
                            <Footer />
                        </div>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </div>
    );
}

export default App;
