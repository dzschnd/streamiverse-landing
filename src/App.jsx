import './App.css';
import { Canvas } from '@react-three/fiber';
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import animation from './assets/animations/animation-fly-through.json';
import React, { useEffect, useState, useCallback, lazy } from "react";

const Scene = lazy(()=> import("./components/3D/Scene"));
const Header = lazy(()=> import("./components/Header/Header"));
const Features = lazy(()=> import("./components/Features/Features"));
const Solutions = lazy(()=> import("./components/Solutions/Solutions"));
const Community = lazy(()=> import("./components/Community/Community"));
const Footer = lazy(()=> import("./components/Contact/Footer"));
const WaitlistWidget = lazy(()=> import("./components/Header/WaitlistWidget"));

function App() {
    const [widgetVisible, setWidgetVisible] = useState(false);
    const [sheet, setSheet] = useState(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const animationPages = 10;
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const updateScrollOffset = useCallback((width) => {
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
                            width >= 489 ? 912 :
                                width >= 410 ? 722 :
                                    770;
        let footerHeight =
            width >= 1440 ? 151 :
                width >= 887 ? 272 :
                    width >= 428 ? 429 :
                        557;
        const newScrollOffset = featuresHeight + solutionsHeight + communityHeight + footerHeight;
        setScrollOffset(newScrollOffset);
    }, []);

    const handleResize = useCallback(() => {
        if (window.innerWidth !== dimensions.width) {
            window.location.reload();
        }
    }, [dimensions.width]);

    useEffect(() => {
        const project = getProject('Streamiverse', {state: animation});
        const sheet = project.sheet('Scene');
        setSheet(sheet);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        updateScrollOffset(dimensions.width);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dimensions.width, handleResize, updateScrollOffset]);

    return (
        <div className={'app background-neutral-900'}>
            <Canvas id={'canvas'} gl={{preserveDrawingBuffer: true}}
                    key={window.innerWidth + window.innerHeight}
            >
                <ScrollControls
                    pages={
                    dimensions.width >= 690 ? animationPages + scrollOffset / dimensions.height : 0.5 * (animationPages + scrollOffset / dimensions.height)
                }>
                    <Scroll>
                        <SheetProvider sheet={sheet}>
                            <Scene/>
                            <Html className={'canvas-html'}>
                                <div>
                                    <div className={'sticky blur'}>
                                        <Header openWidget={() => setWidgetVisible(true)}/>
                                        <div className={`popup ${widgetVisible ? 'visible' : ''}`} style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '25%',
                                            transform: 'translateX(-50%) translateY(25%)'
                                        }}>
                                            <WaitlistWidget closeWidget={() => setWidgetVisible(false)}/>
                                        </div>
                                    </div>
                                    <div className={'background-neutral-900'}
                                         style={{marginTop: `${dimensions.width >= 690 ? animationPages * dimensions.height + scrollOffset : 0.5 * (animationPages * dimensions.height + scrollOffset)}px`}}>
                                        <Features/>
                                        <Solutions/>
                                        <Community openWidget={() => setWidgetVisible(true)}/>
                                        <Footer/>
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
