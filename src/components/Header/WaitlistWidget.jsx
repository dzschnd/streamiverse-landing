import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function WaitlistWidget({ onClose }) {
    const [key, setKey] = useState(0); // Key state to force remount
    const loadScript = (src, id, callback) => {
        if (document.getElementById(id)) {
            if (callback) callback();
            return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.id = id;
        script.async = true;
        script.onload = callback;
        script.onerror = () => console.log(`Failed to load script ${src}`);
        document.body.appendChild(script);
    };

    useEffect(() => {
        const initializeWaitlistWidget = () => {
            if (window.SignupWidgetUI) {
                window.getWaitlist();
            } else {
                console.log('Waitlist widget script did not initialize correctly');
            }
        };

        loadScript('https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js', 'waitlist-widget-script', initializeWaitlistWidget);
    }, [key]);

    useEffect(() => {
        const handleResize = () => {
            setKey(prevKey => prevKey + 1);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="waitlist-popup">
                <div id="getWaitlistContainer" data-waitlist_id="18199" data-widget_type="WIDGET_1"></div>
            </div>
            <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css"
                />
            </Helmet>
        </>
    );
}

export default WaitlistWidget;
