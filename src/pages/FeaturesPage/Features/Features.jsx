import appPreview from '../../../assets/images/features/app-preview.png'
import './Features.css'
function Features() {
    return (
        <div className={'features-wrapper section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Streamiverse Features
            </div>
            <div className={'features-description section-text text-center'}>
                <p>
                    Explore the cutting-edge features that make Streamiverse the ultimate platform for streamers
                </p>
            </div>
            <img className={'margin-inline-auto'} src={appPreview} alt={''}/>
        </div>
    )
}

export default Features;
