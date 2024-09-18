import { useEffect, useState } from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
    const [vh, setVh] = useState(window.innerHeight * 0.01);

    // Function to prevent scrolling (used on mobile for touchmove)
    const preventDefault = (e) => {
        e.preventDefault();
    };

    // Disable scrolling by adding touchmove listener
    const disableScroll = () => {
        document.body.addEventListener('touchmove', preventDefault, { passive: false });
    };

    // Re-enable scrolling by removing the listener
    const enableScroll = () => {
        document.body.removeEventListener('touchmove', preventDefault);
    };

    useEffect(() => {
        // Function to update the viewport height
        const updateVh = () => {
            const newVh = window.innerHeight * 0.01;
            setVh(newVh);
        };

        // Update the height initially
        updateVh();

        // Disable scrolling
        disableScroll();

        // Add event listener for resizing window
        window.addEventListener('resize', updateVh);

        // Clean up: remove event listener and enable scrolling again on unmount
        return () => {
            window.removeEventListener('resize', updateVh);
            enableScroll(); // re-enable scrolling when the component unmounts
        };
    }, []); // Empty dependency array to ensure this runs only on mount/unmount

    return (
        <div className="loading-screen background-neutral-900" style={{ height: `calc(${vh}px * 100)` }}>
            {/* Loading screen content */}
        </div>
    );
}

export default LoadingScreen;
