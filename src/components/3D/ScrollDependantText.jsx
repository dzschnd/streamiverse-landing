import {Text, useScroll} from "@react-three/drei";
import {useState} from "react";
import {useFrame} from "@react-three/fiber";

export const ScrollDependantText = ({ position, color, fontSize, offsetStart, offsetEnd, children }) => {
    const scroll = useScroll();
    const [visible, setVisible] = useState(false);

    useFrame(() => {
        const offset = scroll.offset;
        setVisible(offset >= offsetStart && offset <= offsetEnd);
    });

    return (
        visible && (
            <Text position={position} color={color} fontSize={fontSize}>
                {children}
            </Text>
        )
    );
};