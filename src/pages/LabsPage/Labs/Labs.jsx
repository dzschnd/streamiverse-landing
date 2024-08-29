import streamerGirl from '../../../assets/images/labs/labs-streamer-girl.png'
import './Labs.css'
function Labs() {
    return (
        <div className={'labs-wrapper section-wrapper'}>
            <div className={'section-text text-center color-primary-700'}>
                Coming Soon
            </div>
            <div className={'section-header-smaller text-center'}>
                Streamiverse Labs
            </div>
            <div className={'labs-description section-text text-center'}>
                Streamiverse Labs is a hub helping creators to build technology companies that leverage their influence and direct access to consumers
            </div>
            <img className={'margin-inline-auto'} src={streamerGirl} alt={''}/>
        </div>
    )
}

export default Labs;
