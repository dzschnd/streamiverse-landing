import {PerspectiveCamera, useCurrentSheet} from "@theatre/r3f";
import {useScroll} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {val} from "@theatre/core";
import Experience from "./Experience";
import StarParticles from "./StarParticles";

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    return (
        <>
            <Experience/>
            <PerspectiveCamera
                theatreKey='Camera'
                makeDefault
                near={0.1}
                far={650}
                fov={30}
                position={[0, 0, 0]}
            />
        </>
    );
}

export default Scene;