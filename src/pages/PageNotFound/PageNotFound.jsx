import React, { useEffect, useRef, useState } from 'react';
import code404 from '../../assets/images/page-not-found/404.png';
import './PageNotFound.css';
import Header from "../../components/Header/Header";
import WaitlistWidget from "../../components/Header/WaitlistWidget";
import Footer from "../../components/Footer/Footer";

function PageNotFound() {
    const [widgetVisible, setWidgetVisible] = useState(false);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [vh, setVh] = useState(window.innerHeight * 0.01);
    const [headerHeight, setHeaderHeight] = useState(0);
    const [footerHeight, setFooterHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0); // New state for content height

    const headerRef = useRef(null); // Create a ref for the Header
    const footerRef = useRef(null); // Create a ref for the Footer
    const contentRef = useRef(null); // Create a ref for the content (page-not-found section)

    const updateHeights = () => {
        // Calculate the height of the header, footer, and content dynamically
        if (headerRef.current) {
            setHeaderHeight(headerRef.current.offsetHeight);
        }
        if (footerRef.current) {
            setFooterHeight(footerRef.current.offsetHeight);
        }
        if (contentRef.current) {
            setContentHeight(contentRef.current.offsetHeight);
        }
    };

    const updateVh = () => {
        const newVh = window.innerHeight * 0.01;
        setVh(newVh); // Update vh dynamically
    };

    useEffect(() => {
        // Update height values on initial load
        updateHeights();
        updateVh(); // Update vh on load

        // Listen for window resize to dynamically update heights and vh
        window.addEventListener('resize', () => {
            updateHeights();
            updateVh(); // Update vh on resize
        });

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', () => {
                updateHeights();
                updateVh(); // Remove listener for vh
            });
        };
    }, []);

    // Calculate if the combined height is smaller than the viewport height
    const totalHeight = headerHeight + footerHeight + contentHeight;
    const isShorterThanViewport = totalHeight <= window.innerHeight;

    return (
        <div
            className={'background-neutral-900'}
            style={isShorterThanViewport ? { height: `calc(${vh}px * 100)` } : { minHeight: '100vh' }}
        >
            <div className={'sticky'} ref={headerRef}> {/* Attach ref to the Header */}
                <Header
                    openWidget={() => {
                        setWidgetVisible(true);
                        setScreenHeight(window.innerHeight);
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
                    <WaitlistWidget closeWidget={() => setWidgetVisible(false)} />
                </div>
            </div>

            <div
                className="section-wrapper page-not-found"
                // Dynamically subtract the height of the header and footer
                ref={contentRef} // Attach ref to the content
                style={{ height: `calc(100% - ${headerHeight}px - ${footerHeight}px)`}}
            >
                <img src={code404} alt={'404'} />
                <div>
                    <h1 className={'section-subheader text-center'}>Page not found</h1>
                    <h3 className={'section-text text-center'}>We can't find the page you're looking for...</h3>
                </div>
                <button className={'button button-gradient'}>
                    <a href={'/'}>Go Back Home</a>
                </button>
            </div>

            <div className={'footer-404'} ref={footerRef}>
                <Footer />
            </div>
        </div>
    );
}

export default PageNotFound;
