import moneyTree from '../../../assets/images/features/money-tree.png'
import streamerCoins from '../../../assets/images/features/streamer-coins.png'
import gameController from '../../../assets/images/features/game-controller.png'
import './MonetizationTools.css'
function MonetizationTools() {
    return (
        <div className={'section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Innovative Monetization Tools
            </div>
            <div className={'section-text text-center'}>
                Unlock new revenue streams through digital assets and tokens
            </div>
            <div className={'monetization-tools-nav'}>
                <button className={'button button-gradient'}>
                    Streams
                </button>
                <button className={'button button-gradient'}>
                    Launch Tokens
                </button>
                <button className={'button button-gradient'}>
                    Tokenize Assets
                </button>
            </div>
            <div className={'monetization-tools-tab'}>
                <img src={moneyTree} alt={''}/>
                <div>
                    Explore various methods of monetization, such as selling digital assets, offering subscription
                    services, and more
                </div>
            </div>
            <div className={'monetization-tools-tab'}>
                <img src={streamerCoins} alt={''}/>
                <div>
                    Create and distribute your own tokens to engage your community. Use them for special perks, access
                    to exclusive content, or as a currency within
                    your platform
                </div>
            </div>
            <div className={'monetization-tools-tab'}>
                <img src={gameController} alt={''}/>
                <div>
                    <div className={'color-primary-700'}>
                        Coming Soon
                    </div>
                    <div>
                        Convert in-game items, digital content, and other assets into tokens that can be bought, sold,
                        or traded
                    </div>
                </div>
            </div>
            <div className={'text-center'}>
                <button className="button button-gradient">
                    <span>
                        Join the Waitlist
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MonetizationTools;
