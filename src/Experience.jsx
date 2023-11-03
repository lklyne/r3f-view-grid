import { OrbitControls } from "@react-three/drei"
import {
    EffectComposer,
    Vignette,
    Noise,
    Bloom,
    DepthOfField,
    SSR,
} from "@react-three/postprocessing"
import { Perf } from "r3f-perf"
import { BlendFunction, GlitchMode } from "postprocessing"
import { useControls } from "leva"

console.log(BlendFunction)

export default function Experience() {
    return (
        <>
            <color attach="background" args={["darkblue"]} />

            <EffectComposer multisampling={8}>
                {/* <Vignette 
                offset={ 0.0 }
                darkness={ 1.1 }
                blendFunction={ BlendFunction.NORMAL}
            /> */}
                {/* <Glitch 
                delay={ [ 0.5, 1 ] } 
                duration={ [ 0.1, 0.4 ] }
                mode={ GlitchMode.CONSTANT_WILD }
            /> */}
                {/* <Noise
                premultiply
                blendFunction={ BlendFunction.OVERLAY }
            /> */}
                <Bloom mipmapBlur intensity={0.1} luminanceThreshold={0.0} />
                {/* <DepthOfField 
                focusDistance={ 0.025 }
                focalLength={ 0.025 }
                bokehScale={ 6 }
            /> */}
                {/* <SSR { ...ssrProps } /> */}
            </EffectComposer>

            <Perf position="top-left" />

            <OrbitControls makeDefault />

            <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
            <ambientLight intensity={0.5} />

            <mesh castShadow position-x={0}>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>

            <mesh
                receiveShadow
                position-y={-1}
                rotation-x={-Math.PI * 0.5}
                scale={10}
            >
                <planeGeometry />
                <meshStandardMaterial
                    color="blue"
                    roughness={0.8}
                    metalness={1}
                />
            </mesh>
        </>
    )
}
