import {useState, useRef, useEffect} from "react";
import './MonetizationTools.css'

function MonetizationTools({openWidget}) {
    const importImages = async () => {
        const [
            moneyTree,
            streamerCoins,
            gameController,
            arrowLeft,
            arrowRight
        ] = await Promise.all([
            import('../../../assets/images/features/money-tree.png'),
            import('../../../assets/images/features/streamer-coins.png'),
            import('../../../assets/images/features/game-controller.png'),
            import('../../../assets/images/features/arrow-left.svg'),
            import('../../../assets/images/features/arrow-right.svg'),
        ]);

        return {
            moneyTree: moneyTree.default,
            streamerCoins: streamerCoins.default,
            gameController: gameController.default,
            arrowLeft: arrowLeft.default,
            arrowRight: arrowRight.default,
        };
    };

    const [images, setImages] = useState({
        moneyTree: null,
        streamerCoins: null,
        gameController: null,
        arrowLeft: null,
        arrowRight: null,
    });

    useEffect(() => {
        importImages().then((importedImages) => {
            setImages(importedImages);
        }).catch((error) => {
            console.error('Failed to import images:', error);
        });
    }, []);

    const [currentTab, setCurrentTab] = useState(1);
    const [dragging, setDragging] = useState(false);
    const sliderRef = useRef(null);
    const touchStartX = useRef(0);
    const touchCurrentX = useRef(0);

    const isSmallScreen = () => window.innerWidth <= 1012;

    const speedMultiplier = 15;
    const numTabs = 3;

    const handleTouchStart = (e) => {
        if (!isSmallScreen()) return;

        touchStartX.current = e.targetTouches[0].clientX;
        touchCurrentX.current = touchStartX.current;
        setDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isSmallScreen()) return;

        touchCurrentX.current = e.targetTouches[0].clientX;

        if (dragging && sliderRef.current) {
            const movementX = touchCurrentX.current - touchStartX.current;
            const slideWidth = sliderRef.current.clientWidth;
            const movePercentage = (movementX / slideWidth) * 100;

            let newTransform = -((currentTab - 1) * 100 / numTabs) + (movePercentage * speedMultiplier / numTabs);

            newTransform = currentTab === 1 ? Math.max(newTransform, -((numTabs - 2) * 100 / numTabs)) : currentTab === 2 ? Math.max(newTransform, -((numTabs - 1) * 100 / numTabs)) : Math.max(newTransform, -((numTabs - 1) * 100 / numTabs) - 2);
            newTransform = currentTab === 1 ? Math.min(newTransform, 2) : currentTab === 2 ? Math.min(newTransform, 0) : Math.min(newTransform, -100 / numTabs);

            sliderRef.current.style.transform = `translateX(${newTransform}%)`;
        }
    };

    const handleTouchEnd = () => {
        if (!isSmallScreen()) return;

        setDragging(false);

        const movementX = touchCurrentX.current - touchStartX.current;

        if (movementX < -50 && currentTab < numTabs) {
            setCurrentTab(currentTab + 1);
        } else if (movementX > 50 && currentTab > 1) {
            setCurrentTab(currentTab - 1);
        }

        sliderRef.current.style.transform = `translateX(-${(currentTab - 1) * 100 / numTabs}%)`;
    };

    return (
        <div className={'monetization-tools-wrapper section-wrapper'}>
            <div className={'section-header-smaller text-center'}>
                Innovative Monetization Tools
            </div>
            <div className={'monetization-tools-description section-text text-center'}>
                Unlock new revenue streams through digital assets and tokens
            </div>
            <div className={'monetization-tools-nav'}>
                <button className={`button button-slider ${currentTab === 1 ? 'active' : ''}`} onClick={() => setCurrentTab(1)}>
                    Streams
                </button>
                <button className={`button button-slider ${currentTab === 2 ? 'active' : ''}`} onClick={() => setCurrentTab(2)}>
                    Launch Tokens
                </button>
                <button className={`button button-slider ${currentTab === 3 ? 'active' : ''}`} onClick={() => setCurrentTab(3)}>
                    Tokenize Assets
                </button>
            </div>
            <div className={'monetization-tools-slider'}>
                <div className={'monetization-tools-arrows'}>
                    <button style={{visibility: `${currentTab === 1 ? 'hidden' : 'visible'}`}}
                            onClick={() => setCurrentTab(currentTab - 1)}>
                        <img src={images.arrowLeft} alt={''}/>
                    </button>
                    <button style={{visibility: `${currentTab === numTabs ? 'hidden' : 'visible'}`}}
                            onClick={() => setCurrentTab(currentTab + 1)}>
                        <img src={images.arrowRight} alt={''}/>
                    </button>
                </div>
                <div
                    className={'monetization-tools-tab-wrapper'}
                    ref={sliderRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{transform: `translateX(-${(currentTab - 1) * 100 / numTabs}%)`}}
                >
                    <div className={'monetization-tools-tab'} id={'tab-planet-planet-1.glb.glb.glb'}>
                        <img src={images.moneyTree} alt={''} id={'money-tree'}/>
                        <div>
                            <p>
                                Explore various methods of monetization, such as selling digital assets, offering
                                subscription services, and more
                            </p>
                        </div>
                    </div>
                    <div className={'monetization-tools-tab'} id={'tab-2'}>
                        <img src={images.streamerCoins} alt={''} id={'streamer-coins'}/>
                        <div>
                            <p>
                                Create and distribute your own tokens to engage your community. Use them for special
                                perks,
                                access to exclusive content, or as a currency within your platform
                            </p>
                        </div>
                    </div>
                    <div className={'monetization-tools-tab'} id={'tab-3'}>
                        <img src={images.gameController} alt={''} id={'game-controller'}/>
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
            </div>
            <div className={'text-center'}>
                <button className="button button-gradient" onClick={openWidget}>
                    <span>
                        Join the Waitlist
                    </span>
                </button>
            </div>
        </div>
    )
}

export default MonetizationTools;
