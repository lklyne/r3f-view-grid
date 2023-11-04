import { useRef } from "react"
import { Canvas } from "@react-three/fiber"

import Scene from "./Scene.jsx"

export default function App() {
    const container = useRef()
    const tracking = useRef()

    console.log("it works")

    return (
        <main className="container">
            <div ref={tracking} className="view-box"></div>

            <Canvas
                camera={{
                    fov: 25,
                    near: 0.1,
                    far: 200,
                    position: [4, 2, 6],
                }}
            >
                <Scene />
            </Canvas>
        </main>
    )
}
