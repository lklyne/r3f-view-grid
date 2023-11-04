import { View } from "@react-three/drei"
import { useRef } from "react"

export default function Grid() {
    const container = useRef()
    const tracking = useRef()

    return (
        <div className="container">
            <div ref={tracking} className="view-box"></div>
        </div>
    )
}
