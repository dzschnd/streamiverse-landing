import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Features from "./Features/Features";
import Widgets from "./Widgets/Widgets";
import Wallet from "./Wallet/Wallet";
import MonetizationTools from "./MonetizationTools/MonetizationTools";
import React, {useState} from "react";
import WaitlistWidget from "../../components/Header/WaitlistWidget";

function FeaturesPage() {
    const [widgetVisible, setWidgetVisible] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    return (
        <div className={'background-neutral-900'}>
            <div className={'sticky'}>
                <Header openWidget={() => {
                    setWidgetVisible(true);
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
            <Features/>
            <Widgets/>
            <Wallet/>
            <MonetizationTools openWidget={() => setWidgetVisible(true)}/>
            <Footer/>
        </div>
    )
}

export default FeaturesPage;
