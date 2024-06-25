import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";


const StarParticles = () => {
    const starCount = 1000;
    const starSize = 4;
    const starColor = '#ffffff';
    const starTextureBackgroundColor = 'rgba(255,255,255,0)';
    const starClusterRef = useRef();
    const starClusterPosition = [0, 0, -400];
    const starClusterRadius = 400;
    const starClusterRotationSpeed= 0.004;

    function createCanvasMaterial(size) {
        let matCanvas = document.createElement('canvas');
        matCanvas.width = matCanvas.height = 256;
        let ctx = matCanvas.getContext('2d');
        let texture = new THREE.Texture(matCanvas);

        ctx.fillStyle = starTextureBackgroundColor;
        ctx.fillRect(0, 0, size, size);

        ctx.fillStyle = starColor;
        let center = size / 2;
        ctx.beginPath();
        ctx.arc(center, center, size/2, 0, 2 * Math.PI, false);
        ctx.closePath();
        ctx.fill();

        texture.needsUpdate = true;
        return texture;
    }

    const starPositions = useMemo(() => {
        const positions = new Float32Array(starCount * 3);

        for (let i = 0; i < starCount; i++) {
            let x = -starClusterRadius + Math.random() * 2*starClusterRadius;
            let y = -starClusterRadius + Math.random() * 2*starClusterRadius;
            let z = -starClusterRadius + Math.random() * 2*starClusterRadius;
            positions.set([x, y, z], i * 3);
        }

        return positions;
    }, []);

    useFrame((state, delta) => {
        if (starClusterRef.current) {
            starClusterRef.current.rotation.y += starClusterRotationSpeed * delta;
        }
    });

    return (
        <points ref={starClusterRef} position={starClusterPosition}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={starPositions.length / 3}
                    array={starPositions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                map={createCanvasMaterial(256)}
                size={starSize} sizeAttenuation={true} depthWrite={false} transparent={true} alphaTest={0.5}/>
        </points>
    );
};

export default StarParticles;