import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import {useScroll} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import Experience from "./Experience";
import { useRef } from "react";

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const camera = useRef();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    return (
        <>
            <Experience/>
            <PerspectiveCamera ref={camera}
                               theatreKey='Camera'
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
