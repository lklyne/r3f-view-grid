import { useRef } from "react"
import { Canvas } from "@react-three/fiber"
import { View } from "@react-three/drei"

import Scene from "./Scene.jsx"

export default function App() {
    const numViews = 100 // Set the number of views you want
    const trackingRefs = Array.from({ length: numViews }, () => useRef())

    return (
        <main className="container">
            {trackingRefs.map((ref, index) => (
                <div key={index} ref={ref} className="view-box"></div>
            ))}

            <Canvas
                eventSource={document.getElementById("root")}
                className="canvas"
            >
                {trackingRefs.map((ref, index) => (
                    <View key={index} track={ref}>
                        <Scene />
                    </View>
                ))}
            </Canvas>
        </main>
    )
}
