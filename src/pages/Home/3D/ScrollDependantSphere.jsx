import { useScroll } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ScrollDependantSphere = ({ position, scale, offsetStart, offsetEnd, texture, ...props }) => {
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(0);
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, texture);

    useFrame(() => {
        const offset = scroll.offset;
        const range = offsetEnd - offsetStart;
        const progress = (offset - offsetStart) / range;

        if (offset >= offsetStart && offset <= offsetEnd) {
            setOpacity(Math.min(1, Math.max(0, progress)));
        } else {
            setOpacity(offset < offsetStart ? 0 : 1);
        }

        if (modelRef.current) {
            modelRef.current.traverse((child) => {
                if (child.isMesh) {
                    child.material.opacity = opacity;
                    child.material.transparent = true;
                }
            });
        }
    });

    return (
        <group ref={modelRef} position={position} {...props}>
            <primitive object={gltf.scene} scale={scale} />
        </group>
    );
};
