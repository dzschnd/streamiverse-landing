import './Contact.css'
import {useEffect, useState} from "react";
function Contact() {
    const importImages = async () => {
        const [
            streamersRow
        ] = await Promise.all([
            import('../../../assets/images/labs/labs-streamers-row.png'),
        ]);

        return {
            streamersRow: streamersRow.default,
        };
    };

    const [images, setImages] = useState({
        streamersRow: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    return (
        <div className={'contact-wrapper section-wrapper'}>
            <img className={'margin-inline-auto'} src={images.streamersRow} alt={''}/>
            <h1 className={'section-header-smaller text-center'}>
                Get Involved
            </h1>
            <h2 className={'section-subheader-smaller text-center'}>
                Become a part of Streamiverse Labs and start building your tech company today
            </h2>
            <div className={'text-center'}>
                <button onClick={() => {window.location.href = 'mailto:support@streamiverse.io'}} className="button button-gradient">
                    Contact Us
                </button>
            </div>
        </div>
)
}

export default Contact;
