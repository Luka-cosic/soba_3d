import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";


const KreirajDug = ({ nodes, materials }) => {

    const navigate = useNavigate();
    const kreirajRef = useRef(null);
    const handleClick = ()=>{
        navigate("/kreiraj")
    }
    useFrame((_, delta) => {
       
        kreirajRef.current.rotation.y += 0.5 * delta
    })
    return (
        <>
            <group ref={kreirajRef} onClick={handleClick} >
                <mesh geometry={nodes.Plane001.geometry} material={materials['Material.011']} position={[-1.141, 1.369, 0.658]} rotation={[Math.PI / 2, 0, 0]} >
                    <meshBasicMaterial color="#009999" />
                </mesh>
                <mesh geometry={nodes.Text.geometry} position={[-1.059, 1.148, 1.704]} rotation={[Math.PI / 2, 0, 0]} >
                    <meshBasicMaterial color="white" />
                </mesh>
                <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[0.345, 1.374, 1.01]} rotation={[Math.PI / 2, 0, Math.PI]} >
                    <meshBasicMaterial color="white" />
                </mesh>
            </group>
        </>
    )
}

export default KreirajDug;