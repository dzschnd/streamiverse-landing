import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import Experience from "./Experience";
import { useRef } from "react";
import {abs} from "three/examples/jsm/nodes/math/MathNode";

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const camera = useRef();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        let offset = scroll.offset;
        console.log(offset);
        if (offset < 0) offset = abs(scroll.offset / scroll.pages);
        sheet.sequence.position = offset * sequenceLength;
    });

    return (
        <>
            <Experience />
            <PerspectiveCamera
                ref={camera}
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
