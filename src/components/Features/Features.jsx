import './Features.css'
function Features() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header'}>
                Why Streamiverse?
            </div>
            <div className={'features-content'}>
                <div className={'feature-card'}>
                    <img alt={'Feature 1'}/>
                    <div className={'section-subheader'}>
                        Global Payment Methods
                    </div>
                    <div className={'section-text'}>
                        150+ payment methods and 500+ cryptocurrencies
                    </div>
                </div>
                <div className={'feature-card'}>
                    <img alt={'Feature 2'}/>
                    <div className={'section-subheader'}>
                        Customizable Notifications
                    </div>
                    <div className={'section-text'}>
                        In-stream alerts and notifications and overlays
                    </div>
                </div>
                <div className={'feature-card'}>
                    <img alt={'Feature 3'}/>
                    <div className={'section-subheader'}>
                        Digital Asset Wallet
                    </div>
                    <div className={'section-text'}>
                        Donations are collected in place. No need for manual withdrawals
                    </div>
                </div>
                <div className={'feature-card'}>
                    <img alt={'Feature 4'}/>
                    <div className={'section-subheader'}>
                        Integrated Platform
                    </div>
                    <div className={'section-text'}>
                        Ultimate suite of tools for streamers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;