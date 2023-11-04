import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"

import Scene from "./Scene.jsx"

export default function App() {
    const container = useRef()
    const tracking1 = useRef()
    const tracking2 = useRef()

    return (
        <main className="container">
            <div ref={tracking1} className="view-box"></div>
            <div ref={tracking2} className="view-box"></div>

            <Canvas
                eventSource={document.getElementById("root")}
                className="canvas"
            >
                <View track={tracking1}>
                    <Scene />
                </View>
                <View track={tracking2}>
                    <Scene />
                </View>
            </Canvas>
        </main>
    )
}
