import { useEffect, useState } from 'react';
import {RingLoader} from "react-spinners";
import './LoadingScreen.css';

function LoadingScreen() {
    const [vh, setVh] = useState(window.innerHeight * 0.01);

    useEffect(() => {
        const updateVh = () => {
            const newVh = window.innerHeight * 0.01;
            setVh(newVh);
        };
        updateVh();
        window.addEventListener('resize', updateVh);
        return () => {
            window.removeEventListener('resize', updateVh);
        };
    }, []);

    return (
        <div className="loading-screen background-neutral-900" style={{ height: `calc(${vh}px * 100)` }}>
            <RingLoader loading={true} color={'rgba(107,55,244,0.7)'} size={60} speedMultiplier={0.9}/>
        </div>
    );
}

export default LoadingScreen;
