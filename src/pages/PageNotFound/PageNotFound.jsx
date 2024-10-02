import React, { useState } from 'react';
import code404 from '../../assets/images/page-not-found/404.png';
import './PageNotFound.css';
import Header from '../../components/Header/Header';
import WaitlistWidget from '../../components/Header/WaitlistWidget';
import Footer from '../../components/Footer/Footer';

function PageNotFound() {
    const [widgetVisible, setWidgetVisible] = useState(false);

    return (
        <div
            className={'background-neutral-900 root'}

        >
            <div className={'sticky'}> {/* Attach ref to the Header */}
                <Header
                    openWidget={() => {
                        setWidgetVisible(true);
                    }}
                />
                <div
                    className={`popup ${widgetVisible ? 'visible' : ''}`}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '25%',
                        transform: 'translateX(-50%) translateY(25%)',
                    }}
                >
                    <WaitlistWidget closeWidget={() => setWidgetVisible(false)}/>
                </div>
            </div>

            <div
                className="section-wrapper page-not-found"
            >
                <img src={code404} alt={'404'}/>
                <div>
                    <h1 className={'section-subheader text-center'}>Page not found</h1>
                    <h3 className={'section-text text-center'}>We can't find the page you're looking for...</h3>
                </div>
                <button className={'button button-gradient'}>
                    <a href={'/'}>Go Back Home</a>
                </button>
            </div>

            <div className={'footer-404'}>
                <Footer/>
            </div>
        </div>
    );
}

export default PageNotFound;
