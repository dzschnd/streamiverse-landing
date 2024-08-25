import appPreview from '../../../assets/images/features/app-preview.png'
function Features() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Streamiverse Features
            </div>
            <div className={'section-text text-center'}>
                Explore the cutting-edge features that make Streamiverse the ultimate platform for streamers
            </div>
            <img className={'margin-inline-auto'} src={appPreview} alt={''}/>
        </div>
    )
}

export default Features;
