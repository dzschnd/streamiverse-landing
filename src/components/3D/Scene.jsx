import { PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";
import Experience from "./Experience";
import { useEffect, useRef } from "react";

function Scene() {
    const sheet = useCurrentSheet();
    const scroll = useScroll();
    const camera = useRef();

    useFrame(() => {
        const sequenceLength = val(sheet.sequence.pointer.length);
        sheet.sequence.position = scroll.offset * sequenceLength;
    });

    const anchor = document.getElementById('features-anchor');

    useEffect(() => {
        const handleScroll = () => {
            scroll.el.scrollTop = 5000;
            console.log(scroll.el.scrollTop);
        };

        // Use a timeout to ensure the element is available in the DOM
        const timeoutId = setTimeout(() => {
            if (anchor) {
                anchor.addEventListener("click", handleScroll);
            }

            return () => {
                if (anchor) {
                    anchor.removeEventListener("click", handleScroll);
                }
            };
        }, 0);

        return () => clearTimeout(timeoutId);
    }, [scroll.el]);

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
