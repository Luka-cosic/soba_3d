import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SajtDug = ({nodes}) => {
    const sajtRef = useRef(null)
    useFrame((_, delta) => {
       
        sajtRef.current.rotation.y += 0.5 * delta
    })
    return (
        <>
        <group ref={sajtRef}>
            <mesh geometry={nodes.Text002.geometry} material={nodes.Text002.material} position={[-1.514, 1.316, -0.18]} rotation={[Math.PI / 2, 0, 0]} scale={0.423} >
                <meshBasicMaterial color="white" />
            </mesh>
            <mesh geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[-1.204, 1.398, -0.269]} rotation={[Math.PI / 2, 0, 0]} scale={0.423} >
                <meshBasicMaterial color="#004d4d" />
            </mesh>
            <mesh geometry={nodes.Text003.geometry} material={nodes.Text003.material} position={[-1.202, 1.414, -0.295]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.423} >
                <meshBasicMaterial color="white" />
            </mesh>
            </group>
        </>
    )
}

export default SajtDug;