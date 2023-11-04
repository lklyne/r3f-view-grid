import { Text3D, Center, Float } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function Letter() {
    const letterRef = useRef()

    // Get a random character
    const getRandomChar = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        const randomIndex = Math.floor(Math.random() * characters.length)

        return characters[randomIndex]
    }

    useFrame((state, delta) => {
        // letterRef.current.rotation.y += 0.05 * delta
        letterRef.current.rotation.y += 0.1 * delta
    })

    return (
        <>
            <Float>
                <Center ref={letterRef}>
                    <Text3D
                        align="center"
                        size={2}
                        height={0.3}
                        font="/fonts/Cairo-v2.json"
                    >
                        {getRandomChar()}
                        <meshNormalMaterial />
                    </Text3D>
                </Center>
            </Float>
        </>
    )
}
