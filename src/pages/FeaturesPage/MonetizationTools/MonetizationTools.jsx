import moneyTree from '../../../assets/images/features/money-tree.png'
import streamerCoins from '../../../assets/images/features/streamer-coins.png'
import gameController from '../../../assets/images/features/game-controller.png'
import './MonetizationTools.css'
function MonetizationTools() {
    return (
        <div className={'monetization-tools-wrapper section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Innovative Monetization Tools
            </div>
            <div className={'section-text text-center'}>
                Unlock new revenue streams through digital assets and tokens
            </div>
            <div className={'monetization-tools-nav'}>
                <button className={'button button-slider'}>
                    Streams
                </button>
                <button className={'button button-slider'}>
                    Launch Tokens
                </button>
                <button className={'button button-slider'}>
                    Tokenize Assets
                </button>
            </div>
            <div className={'monetization-tools-tab-wrapper'}>
                <div className={'monetization-tools-tab'} id={'tab-1'}>
                    <img src={moneyTree} alt={''}/>
                    <div>
                        <p>
                            Explore various methods of monetization, such as selling digital assets, offering
                            subscription services, and more
                        </p>
                    </div>
                </div>
                <div className={'monetization-tools-tab'} id={'tab-2'}>
                    <img src={streamerCoins} alt={''}/>
                    <div>
                        <p>
                            Create and distribute your own tokens to engage your community. Use them for special perks,
                            access to exclusive content, or as a currency within your platform
                        </p>
                    </div>
                </div>
                <div className={'monetization-tools-tab'} id={'tab-3'}>
                    <img src={gameController} alt={''}/>
                    <div>
                        <p>
                            <div className={'color-primary-700'}>
                                Coming Soon
                            </div>
                            Convert in-game items, digital content, and other assets into tokens that can be bought,
                            sold, or traded
                        </p>
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
