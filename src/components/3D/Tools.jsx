import {Sphere} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {ScrollDependantText} from "./ScrollDependantText";
import planet1 from '../../assets/images/hero/planet-1.svg'
import planet2 from '../../assets/images/hero/planet-2.svg'
import planet3 from '../../assets/images/hero/planet-3.svg'
import planet4 from '../../assets/images/hero/planet-4.svg'

function Tools() {
    const planet1Texture = useLoader(TextureLoader, planet1)
    const planet2Texture = useLoader(TextureLoader, planet2)
    const planet3Texture = useLoader(TextureLoader, planet3)
    const planet4Texture = useLoader(TextureLoader, planet4)
    return (
        <>
            <group position={[0, 0, -147.5]}>
                <ScrollDependantText position={[0, 0, 0]} fontSize={1.5} offsetStart={0.03} offsetEnd={0.1}>
                    The Streamiverse Universe
                </ScrollDependantText>
                <ScrollDependantText position={[0, -2, 0]} fontSize={0.75} offsetStart={0.03} offsetEnd={0.1}>
                    Streamiverse is like a vast, interconnected space for
                </ScrollDependantText>
                <ScrollDependantText position={[0, -3.2, 0]} fontSize={0.75} offsetStart={0.03} offsetEnd={0.1}>
                    streamers. Each tool and feature is an orbiting body within
                </ScrollDependantText>
                <ScrollDependantText position={[0, -4.4, 0]} fontSize={0.75} offsetStart={0.03} offsetEnd={0.1}>
                    this universe, working together to create a seamless and
                </ScrollDependantText>
                <ScrollDependantText position={[0, -5.6, 0]} fontSize={0.75} offsetStart={0.03} offsetEnd={0.1}>
                    powerful platform for streamers
                </ScrollDependantText>
            </group>
            <group position={[-140, 0, -200]}>
                <Sphere position={[0, 0, -5]} args={[5, 32, 32]}>
                    <meshBasicMaterial map={planet1Texture}/>
                </Sphere>
                <ScrollDependantText position={[0, 3, 4]} rotation={[0, 1.5708, 0]} fontSize={1} offsetStart={0.17} offsetEnd={0.2}>
                    #1
                </ScrollDependantText>
                <ScrollDependantText position={[0, 1, 10]} rotation={[0, 1.5708, 0]} fontSize={1.5} offsetStart={0.17} offsetEnd={0.2}>
                    Streaming Tools
                </ScrollDependantText>
                <ScrollDependantText position={[0, -1, 8.5]} rotation={[0, 1.5708, 0]} fontSize={0.75} offsetStart={0.17} offsetEnd={0.2}>
                    Tools for enhancing the
                </ScrollDependantText>
                <ScrollDependantText position={[0, -2, 8.9]} rotation={[0, 1.5708, 0]} fontSize={0.75} offsetStart={0.17} offsetEnd={0.2}>
                    streaming experience with
                </ScrollDependantText>
                <ScrollDependantText position={[0, -3, 9.1]} rotation={[0, 1.5708, 0]} fontSize={0.75} offsetStart={0.17} offsetEnd={0.2}>
                    alerts, overlays, and more
                </ScrollDependantText>
            </group>

            <group position={[-210, 0, -340]}>
                <Sphere position={[1.6, 0, 0]} args={[5, 32, 32]}>
                    <meshBasicMaterial map={planet2Texture}/>
                </Sphere>
                <ScrollDependantText position={[11.8, 3, 0]} fontSize={1} offsetStart={0.28} offsetEnd={0.31}>
                    #2
                </ScrollDependantText>
                <ScrollDependantText position={[15.2, 1, 0]} fontSize={1.5} offsetStart={0.28} offsetEnd={0.31}>
                    Donations
                </ScrollDependantText>
                <ScrollDependantText position={[16, -1, 0]} fontSize={0.75} offsetStart={0.28} offsetEnd={0.31}>
                    Accept donations from
                </ScrollDependantText>
                <ScrollDependantText position={[16, -2, 0]} fontSize={0.75} offsetStart={0.28} offsetEnd={0.31}>
                    around the world with
                </ScrollDependantText>
                <ScrollDependantText position={[16.95, -3, 0]} fontSize={0.75} offsetStart={0.28} offsetEnd={0.31}>
                    multiple payment options.
                </ScrollDependantText>
            </group>

            <group position={[-200, 0, -530]}>
                <Sphere position={[7, 0, -5]} args={[4, 32, 32]}>
                    <meshBasicMaterial map={planet3Texture}/>
                </Sphere>
                <ScrollDependantText position={[-1.4, 3, -5]} fontSize={1} offsetStart={0.38} offsetEnd={0.41}>
                    #3
                </ScrollDependantText>
                <ScrollDependantText position={[-3.5, 1, -5]} fontSize={1.5} offsetStart={0.38} offsetEnd={0.41}>
                    Wallet
                </ScrollDependantText>
                <ScrollDependantText position={[-7, -1, -5]} fontSize={0.75} offsetStart={0.38} offsetEnd={0.41}>
                    A digital wallet for easily
                </ScrollDependantText>
                <ScrollDependantText position={[-5.9, -2, -5]} fontSize={0.75} offsetStart={0.38} offsetEnd={0.41}>
                    managing donations and
                </ScrollDependantText>
                <ScrollDependantText position={[-6.8, -3, -5]} fontSize={0.75} offsetStart={0.38} offsetEnd={0.41}>
                    payments. All in one place
                </ScrollDependantText>
            </group>

            <group position={[-200, 140, -600]} args={[1, 32, 32]}>
                <Sphere position={[-7.5, 0, 0]} args={[5, 32, 32]} rotation={[1.2, 3.3, 0]}>
                    <meshBasicMaterial map={planet4Texture}/>
                </Sphere>
                <ScrollDependantText position={[2.7, 0, 3]} fontSize={1} rotation={[1.5807, 0, 0]} offsetStart={0.52} offsetEnd={0.55}>
                    #4
                </ScrollDependantText>
                <ScrollDependantText position={[7.5, 0, 1]} fontSize={1.5} rotation={[1.5807, 0, 0]} offsetStart={0.52} offsetEnd={0.55}>
                    Monetization
                </ScrollDependantText>
                <ScrollDependantText position={[9.35, 0, -1]} fontSize={0.75} rotation={[1.5807, 0, 0]} offsetStart={0.52} offsetEnd={0.55}>
                    Innovative ways to monetize your
                </ScrollDependantText>
                <ScrollDependantText position={[8.25, 0, -2]} fontSize={0.75} rotation={[1.5807, 0, 0]} offsetStart={0.52} offsetEnd={0.55}>
                    brand and community through
                </ScrollDependantText>
                <ScrollDependantText position={[7.83, 0, -3]} fontSize={0.75} rotation={[1.5807, 0, 0]} offsetStart={0.52} offsetEnd={0.55}>
                    tokens and digital assets
                </ScrollDependantText>
            </group>
        </>
    )
}

export default Tools;