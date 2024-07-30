import React, {lazy, Suspense, useState} from "react";
import './StaticPages.css'
import LoadingScreen from "../LoadingScreen/LoadingScreen";
const Header = lazy(()=> import("../Header/Header"));
const Features = lazy(()=> import("../Features/Features"));
const Solutions = lazy(()=> import("../Solutions/Solutions"));
const Community = lazy(()=> import("../Community/Community"));
const Footer = lazy(()=> import("../Footer/Footer"));
const WaitlistWidget = lazy(()=> import("../Header/WaitlistWidget"));


function StaticPages({dimensions, animationPages, scrollOffset}) {
    const [widgetVisible, setWidgetVisible] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <div className={'sticky blur'}>
                <Header openWidget={() => {
                    setWidgetVisible(true);
                    if (window.innerHeight > screenHeight) {
                        console.log('smth happened');
                    }
                    setScreenHeight(window.innerHeight);
                }
                }/>
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
                 style={{marginTop: `${dimensions.width >= 690 ? 0.95 * (animationPages * dimensions.height + scrollOffset) : 0.5 * (animationPages * dimensions.height + scrollOffset)}px`}}>
                <Features/>
                <Solutions/>
                <Community openWidget={() => setWidgetVisible(true)}/>
                <Footer/>
            </div>
        </Suspense>
    )
}

export default StaticPages;