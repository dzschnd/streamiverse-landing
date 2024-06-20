import Hero from "./Hero";
import StarParticles from "./StarParticles";

function Experience() {

    return (
        <>
            <ambientLight intensity={Math.PI / 2}/>
            <Hero/>
            <StarParticles/>
        </>
    );
}

export default Experience;
