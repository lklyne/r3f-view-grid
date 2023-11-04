import { OrbitControls } from "@react-three/drei"
import { EffectComposer, Noise, Bloom } from "@react-three/postprocessing"
import { Perf } from "r3f-perf"
import { BlendFunction, GlitchMode } from "postprocessing"
import { useControls } from "leva"

import Letter from "./Letter"
import getRandomColor from "./getRandomColor"

export default function Scene() {
    return (
        <>
            <color attach="background" args={[getRandomColor()]} />

            <EffectComposer multisampling={8}>
                <Noise premultiply blendFunction={BlendFunction.OVERLAY} />
                <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.0} />
                {/* <DepthOfField
                    focusDistance={0.025}
                    focalLength={0.025}
                    bokehScale={6}
                /> */}
            </EffectComposer>

            {/* <Perf position="top-left" /> */}

            <OrbitControls makeDefault />

            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <Letter />
        </>
    )
}
