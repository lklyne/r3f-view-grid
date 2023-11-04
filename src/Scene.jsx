import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing"
import { BlendFunction, GlitchMode } from "postprocessing"
import { useControls } from "leva"

import Letter from "./Letter"
import getRandomColor from "./getRandomColor"

export default function Scene() {
    return (
        <>
            <color attach="background" args={[getRandomColor()]} />

            {/* <EffectComposer multisampling={8}>
                <Noise premultiply blendFunction={BlendFunction.OVERLAY} />
                <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.0} />
            </EffectComposer> */}

            <OrbitControls makeDefault enableZoom={false} />
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />

            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Letter />
        </>
    )
}
