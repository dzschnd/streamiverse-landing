import { useScroll } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export const ScrollDependantSphere = ({ position, scale, offsetStart, offsetEnd, scene, ...props }) => {
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(0);
    const modelRef = useRef();
    const modelRotationSpeed = 0.04;

    useFrame((state, delta) => {
        const offset = scroll.offset;
        const range = offsetEnd - offsetStart;
        const progress = (offset - offsetStart) / range;

        if (offset >= offsetStart && offset <= offsetEnd) {
            setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
            setOpacity(offset < offsetStart ? 0 : 1);
        }

        if (modelRef.current) {
            modelRef.current.rotation.y -= modelRotationSpeed * delta;

            modelRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material.opacity = opacity;
                    child.material.transparent = opacity < 1;
                    child.material.depthWrite = true;
                    child.material.depthTest = true;
                }
            });
        }
    });

    return (
        <group ref={modelRef} position={position} {...props}>
            <primitive frustumCulled={true} object={scene} scale={scale} />
        </group>
    );
};
