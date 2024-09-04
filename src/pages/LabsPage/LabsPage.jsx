import Labs from "./Labs/Labs";
import Mission from "./Mission/Mission";
import Resources from "./Resources/Resources";
import Contact from "./Contact/Contact";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import React, {useState} from "react";
import WaitlistWidget from "../../components/Header/WaitlistWidget";

function LabsPage() {
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
            <Labs/>
            <Mission/>
            <Resources/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default LabsPage;
