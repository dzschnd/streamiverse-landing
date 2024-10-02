import {ScrollDependantText} from './ScrollDependantText';
import planetModel1 from '../../../assets/models/planet-1-webp-2048.glb';
import planetModel2 from '../../../assets/models/planet-2-webp-2048.glb';
import planetModel3 from '../../../assets/models/planet-3-webp-2048.glb';
import planetModel4 from '../../../assets/models/planet-4-webp-2048.glb';
import {useEffect, useState} from 'react';
import {ScrollDependantSphere} from './ScrollDependantSphere';
import {useThree} from '@react-three/fiber';
import {useGLTF} from '@react-three/drei';

function Tools() {
    const {scene: planet1} = useGLTF(planetModel1, true);
    const {scene: planet2} = useGLTF(planetModel2, true);
    const {scene: planet3} = useGLTF(planetModel3, true);
    const {scene: planet4} = useGLTF(planetModel4, true);

    const {gl, scene, camera} = useThree();
    const [screenWidth, setScreenWidth] = useState('desktop');
    const handleResize = () => {
        if (window.innerWidth >= 1170) {
            setScreenWidth('desktop');
        } else if (window.innerWidth >= 690) {
            setScreenWidth('tablet');
        } else {
            setScreenWidth('mobile');
        }
    };
    const isDesktop = screenWidth === 'desktop';
    const isTablet = screenWidth === 'tablet';
    const isMobile = screenWidth === 'mobile';

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        gl.compile(scene, camera);
        gl.render(scene, camera);
    }, [camera, gl, scene]);

    const offsetStart = 0.03;
    const offsetEnd = 0.1;

    const heroTitles = isDesktop ? heroTitlesDesktop : heroTitlesMobile;
    const heroTexts = isDesktop ? heroTextsDesktop : heroTextsMobile;

    function createTextLines(pos, fontSize, texts, y, offsetStart, offsetEnd) {
        const result = [];
        for (let i = 0; i < texts.length; i++) {
            result.push(
                <TextLine key={i} pos={[...pos]} fontSize={fontSize} offsetStart={offsetStart} offsetEnd={offsetEnd}>
                    {texts[i]}
                </TextLine>
            );
            pos[1] = pos[1] - y;
        }

        return result;
    }

    return (
        <>
            {isMobile && <group position={[0, 0, -147.5]}>
                {createTextLines([0, 3, 20], 0.75, heroTitles, 1, offsetStart, offsetEnd)}
                {createTextLines([0, 0, 20], 0.35, heroTexts, 0.5, offsetStart, offsetEnd)}
            </group>}

            {!isMobile && <group position={[0, 0, -147.5]}>
                {createTextLines([0, 0, 0], 1.5, heroTitles, 2, offsetStart, offsetEnd)}
                {createTextLines([0, -2, 0], 0.75, heroTexts, 1.2, 0.03, 0.1)}
            </group>}


            <group position={[-140, 0, -200]}>
                <ScrollDependantSphere
                    position={screenWidth === 'desktop' ? [0, 0, -9] : isTablet ? [0, 0, -4.5] : [0, 3.5, 0]}
                    scale={screenWidth === 'desktop' ? 2 : isTablet ? 1.6 : 1.2}
                    rotation={[0, 1, 0]}
                    scene={planet1}
                    offsetStart={0} offsetEnd={0}/>
                <ScrollDependantText
                    position={isDesktop ? [0, 3, 2] : isTablet ? [0, 2, 3] : [0, -1.5, 0]}
                    fontSize={isDesktop ? 1 : isTablet ? 0.5 : 0.5}
                    rotation={[0, 1.5708, 0]}
                    offsetStart={0.14} offsetEnd={0.2}
                >
                    #1
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [0, 1, 8] : isTablet ? [0, 1, 6] : [0, -2.5, 0]}
                    fontSize={isDesktop ? 1.5 : isTablet ? 0.75 : 0.75}
                    rotation={[0, 1.5708, 0]}
                    offsetStart={0.14} offsetEnd={0.2}
                >
                    Streaming Tools
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [0, -1, 6.5] : isTablet ? [0, 0, 5.1] : [0, -3.5, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[0, 1.5708, 0]}
                    offsetStart={0.14} offsetEnd={0.2}
                >
                    Tools for enhancing the
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [0, -2, 6.9] : isTablet ? [0, -0.5, 5.3] : [0, -4, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[0, 1.5708, 0]}
                    offsetStart={0.14} offsetEnd={0.2}
                >
                    streaming experience with
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [0, -3, 7.1] : isTablet ? [0, -1, 5.35] : [0, -4.5, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[0, 1.5708, 0]}
                    offsetStart={0.14} offsetEnd={0.2}
                >
                    alerts, overlays, and more
                </ScrollDependantText>
            </group>


            <group position={[-210, 0, -340]}>
                <ScrollDependantSphere
                    position={isDesktop ? [1.6, 0, 0] : isTablet ? [5, 0, 0] : [10, 3.5, 0]}
                    scale={isDesktop ? 2 : isTablet ? 1.6 : 1.2}
                    scene={planet2}
                    rotation={[0, 0, 0]}
                    offsetStart={0.3} offsetEnd={0.3}
                />
                <ScrollDependantText
                    position={isDesktop ? [11.8, 3, 0] : isTablet ? [13.8, 2, 0] : [10, -1.5, 0]}
                    fontSize={isDesktop ? 1 : isTablet ? 0.5 : 0.5}
                    offsetStart={0.3} offsetEnd={0.3}
                >
                    #2
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [15.2, 1, 0] : isTablet ? [15.5, 1, 0] : [10, -2.5, 0]}
                    fontSize={isDesktop ? 1.5 : isTablet ? 0.75 : 0.75}
                    offsetStart={0.3} offsetEnd={0.3}
                >
                    Donations
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [16, -1, 0] : isTablet ? [15.7, 0, 0] : [10, -3.5, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.3} offsetEnd={0.3}
                >
                    Accept donations from
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [16, -2, 0] : isTablet ? [15.7, -0.5, 0] : [10, -4, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.3} offsetEnd={0.3}
                >
                    around the world with
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [16.75, -3, 0] : isTablet ? [16.05, -1, 0] : [10, -4.5, 0]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.3} offsetEnd={0.3}
                >
                    multiple payment options
                </ScrollDependantText>
            </group>


            <group position={[-200, 0, -530]}>
                <ScrollDependantSphere
                    position={isDesktop ? [7, 0, -5] : isTablet ? [4.5, 0, -5] : [0, 2.5, -5]}
                    scale={isDesktop ? 2 : isTablet ? 1.6 : 1.2}
                    scene={planet3}
                    rotation={[0.4, -0.5, 0]}
                    offsetStart={0.5} offsetEnd={0.55}
                />
                <ScrollDependantText
                    position={isDesktop ? [-1.4, 3, -5] : isTablet ? [-1.4, 2, -5] : [0, -1.5, -5]}
                    fontSize={isDesktop ? 1 : isTablet ? 0.5 : 0.5}
                    offsetStart={0.5} offsetEnd={0.55}
                >
                    #3
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [-3.5, 1, -5] : isTablet ? [-2.5, 1, -5] : [0, -2.5, -5]}
                    fontSize={isDesktop ? 1.5 : isTablet ? 0.75 : 0.75}
                    offsetStart={0.5} offsetEnd={0.55}
                >
                    Wallet
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [-7, -1, -5] : isTablet ? [-4, 0, -5] : [0, -3.5, -5]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.5} offsetEnd={0.55}
                >
                    A digital wallet for easily
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [-5.9, -2, -5] : isTablet ? [-3.5, -0.5, -5] : [0, -4, -5]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.5} offsetEnd={0.55}
                >
                    managing donations and
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [-6.8, -3, -5] : isTablet ? [-3.9, -1, -5] : [0, -4.5, -5]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    offsetStart={0.5} offsetEnd={0.55}
                >
                    payments. All in one place
                </ScrollDependantText>
            </group>


            <group position={[-200, 140, -600]} args={[1, 32, 32]}>
                <ScrollDependantSphere
                    position={isDesktop ? [-9, 0, 0] : isTablet ? [-4.5, 0, 0] : [0, 0, 3.5]}
                    scale={isDesktop ? 2 : isTablet ? 1.6 : 1.2}
                    rotation={[1.45, 5.8, 0]}
                    scene={planet4}
                    offsetStart={0.55} offsetEnd={0.55}
                />
                <ScrollDependantText
                    position={isDesktop ? [1.2, 0, 3] : isTablet ? [2.2, 0, 2] : [0, 0, -1.5]}
                    fontSize={isDesktop ? 1 : isTablet ? 0.5 : 0.5}
                    rotation={[1.5807, 0, 0]}
                    offsetStart={0.55} offsetEnd={0.55}
                >
                    #4
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [6, 0, 1] : isTablet ? [4.6, 0, 1] : [0, 0, -2.5]}
                    fontSize={isDesktop ? 1.5 : isTablet ? 0.75 : 0.75}
                    rotation={[1.5807, 0, 0]}
                    offsetStart={0.55} offsetEnd={0.55}
                >
                    Monetization
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [7.85, 0, -1] : isTablet ? [5.3, 0, 0] : [0, 0, -3.5]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[1.5807, 0, 0]}
                    offsetStart={0.55} offsetEnd={0.55}
                >
                    Innovative ways to monetize your
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [6.75, 0, -2] : isTablet ? [4.8, 0, -0.5] : [0, 0, -4]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[1.5807, 0, 0]}
                    offsetStart={0.55} offsetEnd={0.55}
                >
                    brand and community through
                </ScrollDependantText>
                <ScrollDependantText
                    position={isDesktop ? [6.33, 0, -3] : isTablet ? [4.6, 0, -1] : [0, 0, -4.5]}
                    fontSize={isDesktop ? 0.75 : isTablet ? 0.35 : 0.35}
                    rotation={[1.5807, 0, 0]}
                    offsetStart={0.55} offsetEnd={0.55}
                >
                    tokens and digital assets
                </ScrollDependantText>
            </group>
        </>
    );
}

function TextLine({pos, fontSize, offsetStart, offsetEnd, children}) {
    return (
        <ScrollDependantText
            position={pos}
            fontSize={fontSize}
            offsetStart={offsetStart}
            offsetEnd={offsetEnd}
        >
            {children}
        </ScrollDependantText>
    );
}

const heroTitlesDesktop = ['Ultimate crypto solution for streamers'];
const heroTextsDesktop = [
    'Earn more by accepting donations in any cryptocurrency.',
    'We automatically convert incoming donations to a preferred crypto.',
    'Collect and use your donations effortlessly in all-in-one digital wallet.',
    'Focus on creating content, leave complex world of crypto for us.'
];

const heroTitlesMobile = [
    'Ultimate',
    'crypto solution',
    'for streamers',
];
const heroTextsMobile = [
    'Earn more by accepting donations',
    'in any cryptocurrency.',
    'We automatically convert incoming',
    'donations to a preferred crypto.',
    'Collect and use your donations',
    'in all-in-one digital wallet.',
    'Focus on creating content,',
    'leave crypto for us.',
];

export default Tools;
