import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const SajtDug = ({nodes}) => {

    const [hovered, setHovered] = useState(false);
    const sajtRef = useRef(null);
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/sajt");

    }
    useFrame((_, delta) => {
        sajtRef.current.rotation.y += 0.5 * delta
    });

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
      }, [hovered]);
    return (
        <>
        <group ref={sajtRef} onClick={handleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} >
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