import {Plane, Sphere, useScroll} from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export const ScrollDependantSphere = ({ isSecond, position, args, offsetStart, offsetEnd, texture, ...props }) => {
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(0);
    const sphereRef = useRef();
    const textureMap = useLoader(TextureLoader, texture);

    useFrame(() => {
        const offset = scroll.offset;
        const range = offsetEnd - offsetStart;
        const progress = (offset - offsetStart) / range;

        if (offset >= offsetStart && offset <= offsetEnd) {
            setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
            setOpacity(offset < offsetStart ? 0 : 1);
        }
        if (sphereRef.current) {
            sphereRef.current.material.opacity = opacity;
            sphereRef.current.material.transparent = true;
        }

        const startRotation = [0, 1.57, 0];
        const endRotation = [0, 0, 0];
        const rotationStartOffset = 0.32;
        const rotationEndOffset = 0.42;
        if (isSecond) {
            if (offset >= rotationStartOffset && offset <= rotationEndOffset) {
                const rotationProgress = (offset - rotationStartOffset) / (rotationEndOffset - rotationStartOffset);
                const interpolatedRotation = [
                    startRotation[0] + (endRotation[0] - startRotation[0]) * rotationProgress,
                    startRotation[1] + (endRotation[1] - startRotation[1]) * rotationProgress,
                    startRotation[2] + (endRotation[2] - startRotation[2]) * rotationProgress,
                ];
                sphereRef.current.rotation.set(...interpolatedRotation);
            } else if (offset < rotationStartOffset) {
                sphereRef.current.rotation.set(...startRotation);
            } else if (offset > rotationEndOffset) {
                sphereRef.current.rotation.set(...endRotation);
            }
        }
    });

    return (
        <Plane ref={sphereRef} position={position} args={args} {...props}>
            <meshBasicMaterial map={textureMap} transparent={true} opacity={0} />
        </Plane>
    );
};