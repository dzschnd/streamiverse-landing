import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useState } from 'react';
import font from '../../assets/fonts/IBMPlexMono-Medium.ttf';

export const ScrollDependantText = ({ position, rotation, fontSize, offsetStart, offsetEnd, children }) => {
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(1);

    useFrame(() => {
        const offset = scroll.offset;
        const range = offsetEnd - offsetStart;
        const progress = (offset - offsetStart) / range;

        if (offset >= offsetStart && offset <= offsetEnd) {
            // setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
            // setOpacity(offset < offsetStart ? 0 : 1);
        }
    });

    return (
        <Text
            position={position}
            rotation={rotation}
            font={font}
            fontSize={fontSize}
            material-toneMapped={false}
            material-opacity={opacity}
        >
            {children}
        </Text>
    );
};
