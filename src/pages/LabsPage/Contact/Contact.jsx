import streamersRow from '../../../assets/images/labs/labs-streamers-row.png'
import './Contact.css'
function Contact() {
    return (
        <div className={'contact-wrapper section-wrapper'}>
            <img className={'margin-inline-auto'} src={streamersRow} alt={''}/>
            <div className={'section-header-smaller text-center'}>
                Get Involved
            </div>
            <div className={'section-subheader-smaller text-center'}>
                Become a part of Streamiverse Labs and start building your tech company today
            </div>
            <div className={'text-center'}>
                <button className="button button-gradient">
                    Contact us
                </button>
            </div>
        </div>
    )
}

export default Contact;
