import {ScrollDependantText} from "./ScrollDependantText";
import planet1 from '../../assets/images/hero/planet-1.svg'
import planet2 from '../../assets/images/hero/planet-2.svg'
import planet3 from '../../assets/images/hero/planet-3.svg'
import planet4 from '../../assets/images/hero/planet-4.svg'
import planet1Upscale from '../../assets/images/hero/planet-1-upscale.png'
import planet2Upscale from '../../assets/images/hero/planet-2-upscale.png'
import planet3Upscale from '../../assets/images/hero/planet-3-upscale.png'
import planet4Upscale from '../../assets/images/hero/planet-4-upscale.png'
import {useEffect, useState} from "react";
import {ScrollDependantSphere} from "./ScrollDependantSphere";

function Tools() {
    const [screenWidth, setScreenWidth] = useState('desktop');
    const handleResize = () => {
        if (window.innerWidth >= 1170) {
            setScreenWidth('desktop')
        } else if (window.innerWidth >= 690) {
            setScreenWidth('tablet')
        } else {
            setScreenWidth('mobile')
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {screenWidth === 'mobile' && <group position={[0, 0, -147.5]}>
                <ScrollDependantText position={[0, 3, 20]}
                                     fontSize={0.75}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    The
                </ScrollDependantText>
                <ScrollDependantText position={[0, 2, 20]}
                                     fontSize={0.75}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    Streamiverse
                </ScrollDependantText>
                <ScrollDependantText position={[0, 1, 20]}
                                     fontSize={0.75}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    Universe
                </ScrollDependantText>
                <ScrollDependantText position={[0, 0, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    Streamiverse is like a
                </ScrollDependantText>
                <ScrollDependantText position={[0, -0.5, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    vast, interconnected space
                </ScrollDependantText>
                <ScrollDependantText position={[0, -1, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    for streamers. Each tool
                </ScrollDependantText>
                <ScrollDependantText position={[0, -1.5, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    and feature is an orbiting
                </ScrollDependantText>
                <ScrollDependantText position={[0, -2, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    body within this universe,
                </ScrollDependantText>
                <ScrollDependantText position={[0, -2.5, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    working together to create
                </ScrollDependantText>
                <ScrollDependantText position={[0, -3, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    a seamless and powerful
                </ScrollDependantText>
                <ScrollDependantText position={[0, -3.5, 20]}
                                     fontSize={0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    platform for streamers
                </ScrollDependantText>
            </group>}

            {screenWidth !== 'mobile' && <group position={[0, 0, -147.5]}>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, 0, 0]
                    : screenWidth === 'tablet' ? [0, 0, 20]
                        : [0, 0, -7]}
                                     fontSize={screenWidth === 'desktop' ? 1.5
                                         : screenWidth === 'tablet' ? 0.75
                                             : 0.75}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    The Streamiverse Universe
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -2, 0]
                    : screenWidth === 'tablet' ? [0, -1, 20]
                        : [0, -1, -7]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    Streamiverse is like a vast, interconnected space for
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -3.2, 0]
                    : screenWidth === 'tablet' ? [0, -1.5, 20]
                        : [0, -1.5, -7]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    streamers. Each tool and feature is an orbiting body within
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -4.4, 0]
                    : screenWidth === 'tablet' ? [0, -2, 20]
                        : [0, -2, -7]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    this universe, working together to create a seamless and
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -5.6, 0]
                    : screenWidth === 'tablet' ? [0, -2.5, 20]
                        : [0, -2.5, -7]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.03} offsetEnd={0.1}>
                    powerful platform for streamers
                </ScrollDependantText>
            </group>}


            <group position={[-140, 0, -200]}>
                <ScrollDependantSphere
                    position={screenWidth === 'desktop' ? [0, 0, -9]
                        : screenWidth === 'tablet' ? [0, 0, -4.5]
                            : [0, 3.5, 0]}
                    args={screenWidth === 'desktop' ? [5, 32, 32]
                        : screenWidth === 'tablet' ? [4, 32, 32]
                            : [3, 32, 32]}
                    texture={planet1Upscale}
                    offsetStart={0} offsetEnd={0}/>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, 3, 2]
                    : screenWidth === 'tablet' ? [0, 2, 3]
                        : [0, -1.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 1
                                         : screenWidth === 'tablet' ? 0.5
                                             : 0.5}
                                     rotation={[0, 1.5708, 0]}
                                     offsetStart={0.14} offsetEnd={0.2}>
                    #1
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, 1, 8]
                    : screenWidth === 'tablet' ? [0, 1, 6]
                        : [0, -2.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 1.5
                                         : screenWidth === 'tablet' ? 0.75
                                             : 0.75}
                                     rotation={[0, 1.5708, 0]}
                                     offsetStart={0.14} offsetEnd={0.2}>
                    Streaming Tools
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -1, 6.5]
                    : screenWidth === 'tablet' ? [0, 0, 5.1]
                        : [0, -3.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[0, 1.5708, 0]}
                                     offsetStart={0.14} offsetEnd={0.2}>
                    Tools for enhancing the
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -2, 6.9]
                    : screenWidth === 'tablet' ? [0, -0.5, 5.3]
                        : [0, -4, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[0, 1.5708, 0]}
                                     offsetStart={0.14} offsetEnd={0.2}>
                    streaming experience with
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [0, -3, 7.1]
                    : screenWidth === 'tablet' ? [0, -1, 5.35]
                        : [0, -4.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[0, 1.5708, 0]}
                                     offsetStart={0.14} offsetEnd={0.2}>
                    alerts, overlays, and more
                </ScrollDependantText>
            </group>


            <group position={[-210, 0, -340]}>
                <ScrollDependantSphere
                    position={screenWidth === 'desktop' ? [1.6, 0, 0]
                        : screenWidth === 'tablet' ? [5, 0, 0]
                            : [10, 3.5, 0]}
                    args={screenWidth === 'desktop' ? [5, 32, 32]
                        : screenWidth === 'tablet' ? [4, 32, 32]
                            : [3, 32, 32]}
                    texture={planet2Upscale}
                    rotation={[0, -1, 0.1]}
                    offsetStart={0.3} offsetEnd={0.3}/>
                <ScrollDependantText position={screenWidth === 'desktop' ? [11.8, 3, 0]
                    : screenWidth === 'tablet' ? [13.8, 2, 0]
                        : [10, -1.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 1
                                         : screenWidth === 'tablet' ? 0.5
                                             : 0.5}
                                     offsetStart={0.3} offsetEnd={0.3}>
                    #2
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [15.2, 1, 0]
                    : screenWidth === 'tablet' ? [15.5, 1, 0]
                        : [10, -2.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 1.5
                                         : screenWidth === 'tablet' ? 0.75
                                             : 0.75}
                                     offsetStart={0.3} offsetEnd={0.3}>
                    Donations
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [16, -1, 0]
                    : screenWidth === 'tablet' ? [15.7, 0, 0]
                        : [10, -3.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.3} offsetEnd={0.3}>
                    Accept donations from
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [16, -2, 0]
                    : screenWidth === 'tablet' ? [15.7, -0.5, 0]
                        : [10, -4, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.3} offsetEnd={0.3}>
                    around the world with
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [16.75, -3, 0]
                    : screenWidth === 'tablet' ? [16.05, -1, 0]
                        : [10, -4.5, 0]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.3} offsetEnd={0.3}>
                    multiple payment options
                </ScrollDependantText>
            </group>


            <group position={[-200, 0, -530]}>
                <ScrollDependantSphere position={screenWidth === 'desktop' ? [7, 0, -5]
                    : screenWidth === 'tablet' ? [4.5, 0, -5]
                        : [0, 2.5, -5]}
                                       args={screenWidth === 'desktop' ? [4, 32, 32]
                                           : screenWidth === 'tablet' ? [3, 32, 32]
                                               : [2.3, 32, 32]}
                                       texture={planet3Upscale}
                                       rotation={[0,-1.5,0]}
                                       offsetStart={0.5} offsetEnd={0.55}/>
                <ScrollDependantText position={screenWidth === 'desktop' ? [-1.4, 3, -5]
                    : screenWidth === 'tablet' ? [-1.4, 2, -5]
                        : [0, -1.5, -5]}
                                     fontSize={screenWidth === 'desktop' ? 1
                                         : screenWidth === 'tablet' ? 0.5
                                             : 0.5}
                                     offsetStart={0.5} offsetEnd={0.55}>
                    #3
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [-3.5, 1, -5]
                    : screenWidth === 'tablet' ? [-2.5, 1, -5]
                        : [0, -2.5, -5]}
                                     fontSize={screenWidth === 'desktop' ? 1.5
                                         : screenWidth === 'tablet' ? 0.75
                                             : 0.75}
                                     offsetStart={0.5} offsetEnd={0.55}>
                    Wallet
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [-7, -1, -5]
                    : screenWidth === 'tablet' ? [-4, 0, -5]
                        : [0, -3.5, -5]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.5} offsetEnd={0.55}>
                    A digital wallet for easily
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [-5.9, -2, -5]
                    : screenWidth === 'tablet' ? [-3.5, -0.5, -5]
                        : [0, -4, -5]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.5} offsetEnd={0.55}>
                    managing donations and
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [-6.8, -3, -5]
                    : screenWidth === 'tablet' ? [-3.9, -1, -5]
                        : [0, -4.5, -5]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     offsetStart={0.5} offsetEnd={0.55}>
                    payments. All in one place
                </ScrollDependantText>
            </group>


            <group position={[-200, 140, -600]} args={[1, 32, 32]}>
                <ScrollDependantSphere position={screenWidth === 'desktop' ? [-9, 0, 0]
                    : screenWidth === 'tablet' ? [-4.5, 0, 0]
                        : [0, 0, 3.5]}
                                       args={screenWidth === 'desktop' ? [5, 32, 32]
                                           : screenWidth === 'tablet' ? [4, 32, 32]
                                               : [3, 32, 32]}
                                       rotation={[1.45, 4.8, 0]}
                                       texture={planet4Upscale}
                                       offsetStart={0.55} offsetEnd={0.55}/>
                <ScrollDependantText position={screenWidth === 'desktop' ? [1.2, 0, 3]
                    : screenWidth === 'tablet' ? [2.2, 0, 2]
                        : [0, 0, -1.5]}
                                     fontSize={screenWidth === 'desktop' ? 1
                                         : screenWidth === 'tablet' ? 0.5
                                             : 0.5}
                                     rotation={[1.5807, 0, 0]}
                                     offsetStart={0.55} offsetEnd={0.55}>
                    #4
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [6, 0, 1]
                    : screenWidth === 'tablet' ? [4.6, 0, 1]
                        : [0, 0, -2.5]}
                                     fontSize={screenWidth === 'desktop' ? 1.5
                                         : screenWidth === 'tablet' ? 0.75
                                             : 0.75}
                                     rotation={[1.5807, 0, 0]}
                                     offsetStart={0.55} offsetEnd={0.55}>
                    Monetization
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [7.85, 0, -1]
                    : screenWidth === 'tablet' ? [5.3, 0, 0]
                        : [0, 0, -3.5]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[1.5807, 0, 0]}
                                     offsetStart={0.55} offsetEnd={0.55}>
                    Innovative ways to monetize your
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [6.75, 0, -2]
                    : screenWidth === 'tablet' ? [4.8, 0, -0.5]
                        : [0, 0, -4]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[1.5807, 0, 0]}
                                     offsetStart={0.55} offsetEnd={0.55}>
                    brand and community through
                </ScrollDependantText>
                <ScrollDependantText position={screenWidth === 'desktop' ? [6.33, 0, -3]
                    : screenWidth === 'tablet' ? [4.6, 0, -1]
                        : [0, 0, -4.5]}
                                     fontSize={screenWidth === 'desktop' ? 0.75
                                         : screenWidth === 'tablet' ? 0.35
                                             : 0.35}
                                     rotation={[1.5807, 0, 0]}
                                     offsetStart={0.55} offsetEnd={0.55}>
                    tokens and digital assets
                </ScrollDependantText>
            </group>
        </>
    )
}

export default Tools;