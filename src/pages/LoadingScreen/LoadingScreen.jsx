import { useEffect, useRef, useState } from 'react';
import './LoadingScreen.css';

function ScrollFix(elem) {
    var startY, startTopScroll;

    // If there is no element, then do nothing
    if (!elem) return;

    // Handle the start of interactions
    elem.addEventListener('touchstart', function (event) {
        startY = event.touches[0].pageY;
        startTopScroll = elem.scrollTop;

        if (startTopScroll <= 0)
            elem.scrollTop = 1;

        if (startTopScroll + elem.offsetHeight >= elem.scrollHeight)
            elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
    }, false);
}

function LoadingScreen() {
    const [vh, setVh] = useState(window.innerHeight * 0.01);
    const loadingScreenRef = useRef(null);

    useEffect(() => {
        const updateVh = () => {
            const newVh = window.innerHeight * 0.01;
            setVh(newVh);
        };

        updateVh();

        if (loadingScreenRef.current) {
            ScrollFix(loadingScreenRef.current);
        }
        window.addEventListener('resize', updateVh);
        return () => {
            window.removeEventListener('resize', updateVh);
        };
    }, []);

    return (
        <div ref={loadingScreenRef} className="loading-screen background-neutral-900" style={{ height: `calc(${vh}px * 100)` }}>

        </div>
    );
}

export default LoadingScreen;
