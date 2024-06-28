import { Sphere, useScroll } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { TextureLoader } from 'three';

export const ScrollDependantSphere = ({ position, args, offsetStart, offsetEnd, texture, ...props }) => {
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(1);
    const sphereRef = useRef();
    const textureMap = useLoader(TextureLoader, texture);

    useFrame(() => {
        const offset = scroll.offset;
        const range = offsetEnd - offsetStart;
        const progress = (offset - offsetStart) / range;

        if (offset >= offsetStart && offset <= offsetEnd) {
            // setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
            // setOpacity(offset < offsetStart ? 0 : 1);
        }
        if (sphereRef.current) {
            sphereRef.current.material.opacity = opacity;
            sphereRef.current.material.transparent = true;
        }
    });

    return (
        <Sphere ref={sphereRef} position={position} args={args} {...props}>
            <meshBasicMaterial map={textureMap} transparent={true} opacity={0} />
        </Sphere>
    );
};
