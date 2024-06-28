import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, useCurrentSheet } from '@theatre/r3f';
import { useRef } from 'react';
import Experience from './Experience';

function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const camera = useRef();

    useFrame(() => {
        const sequenceLength = 5;
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    return (
        <>
            <Experience />
            <PerspectiveCamera
                ref={camera}
                theatreKey="Camera"
                makeDefault
                near={0.1}
                far={900}
                fov={30}
                position={[-100, 0, 100]}
            />
        </>
    );
}

export default Scene;
