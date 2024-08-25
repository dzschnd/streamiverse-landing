import rocketBullet from '../../../assets/images/labs/rocket-bullet.svg'
import astronautBullet from '../../../assets/images/labs/astronaut-bullet.svg'
import './Mission.css'
function Mission() {
    return (
        <div className={'section-wrapper'}>
            <div className={'mission-content'}>
                <div>
                    <div className={'section-header-smaller'}>
                        Empowering Creators
                    </div>
                    <div className={'section-text'}>
                        At Streamiverse Labs, our mission is to empower creators by providing the tools and resources necessary to build successful technology companies. We believe in the power of influence and the direct connection creators have with
                        their audience
                    </div>
                </div>
                <div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={rocketBullet} alt={''}/>
                        <div className={'section-text'}>
                            We help with sales and business development for your product
                        </div>
                    </div>
                    <div className={'bullet-point'}>
                        <img className={'bullet'} src={astronautBullet} alt={''}/>
                        <div className={'section-text'}>
                            We facilitate operational and development part, you lead the strategy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mission;
