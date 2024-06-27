import './Features.css'
import globe from '../../assets/images/features/globe.png'
import brick from '../../assets/images/features/brick.png'
import moneyJar from '../../assets/images/features/money-jar.png'
import platform from '../../assets/images/features/platform.png'
function Features() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header'}>
                Why Streamiverse?
            </div>
            <div className={'features-content'}>
                <div className={'feature-card background-gradient'} id={'gradient-upper-right'}>
                    <img id={'globe'} src={globe} alt={''}/>
                    <div className={'feature-text'}>
                        <div className={'section-subheader'}>
                            Global Payment Methods
                        </div>
                        <div className={'section-text'}>
                            150+ payment methods and 500+ cryptocurrencies
                        </div>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-bottom'}>
                    <div className={'bricks-image'}>
                        <img id={'brick-top'} src={brick} alt={''}/>
                        <img id={'brick-bottom'} src={brick}/>
                    </div>
                    <div className={'feature-text'}>
                        <div className={'section-subheader'}>
                            Customizable Notifications
                        </div>
                        <div className={'section-text'}>
                            In-stream alerts and notifications and overlays
                        </div>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-upper-left'}>
                    <img id={'money-jar'} src={moneyJar} alt={''}/>
                    <div className={'feature-text'}>
                        <div className={'section-subheader'}>
                            Digital Asset Wallet
                        </div>
                        <div className={'section-text'}>
                            Donations are collected in place. No need for manual withdrawals
                        </div>
                    </div>
                </div>
                <div className={'feature-card background-gradient'} id={'gradient-bottom'}>
                    <div className={'platform-image'}>
                        <img id={'platform-bottom'} src={platform} alt={''}/>
                        <img id={'platform-mid'} src={platform}/>
                        <img id={'platform-top'} src={platform}/>
                    </div>
                    <div className={'feature-text'}>
                        <div className={'section-subheader'}>
                            Integrated Platform
                        </div>
                        <div className={'section-text'}>
                            Ultimate suite of tools for streamers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;