import streamerGuy from '../../../assets/images/labs/labs-streamer-guy.png'
import gears from '../../../assets/images/labs/gears.png'
import stats from '../../../assets/images/labs/stats.png'
import rocket from '../../../assets/images/labs/rocket.png'
import './Resources.css'
function Resources() {
    return (
        <div className={'resources-wrapper section-wrapper'}>
            <div className={'resources-content'}>
                <div className={'resources-cards-big'}>
                    <div className={'resources-card'}>
                        <div className={'section-header-smaller'}>
                            Comprehensive Resources
                        </div>
                        <div className={'section-subheader-smaller'}>
                            Access a wealth of resources designed to help you turn your ideas into thriving
                            businesses
                        </div>
                    </div>
                    <div className={'resources-card'}>
                        <img src={streamerGuy} alt={''}/>
                    </div>
                </div>
                <div className={'resources-cards-small'}>
                    <div className={'resources-card'}>
                        <img src={gears} alt={''} id={'gears'}/>
                        <div className={'section-text'}>
                            Technical development tools and platforms
                        </div>
                    </div>
                    <div className={'resources-card'}>
                        <img src={stats} alt={''} id={'stats'}/>
                        <div className={'section-text'}>
                            Business development and marketing strategies
                        </div>
                    </div>
                    <div className={'resources-card'}>
                        <img src={rocket} alt={''} id={'rocket'}/>
                        <div className={'section-text'}>
                            Financial planning and funding opportunities
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources;
