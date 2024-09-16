import Hero from "./Hero";
import StarParticles from "./StarParticles";
import Tools from "./Tools";

function Experience() {

    return (
        <>
            <ambientLight intensity={Math.PI / 2}/>
            <directionalLight position={[0, 0, 0]} intensity={Math.PI}/>
            <Hero/>
            <StarParticles/>
            <Tools/>
        </>
    );
}

export default Experience;
