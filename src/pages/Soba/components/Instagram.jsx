import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from 'maath';
import { useEffect, useState } from "react";

const Instagram = ({ nodes, materials }) => {

    const [hovered, setHovered] = useState(false);
    const instRef = useRef(null);
    const handleClick = ()=>{
        window.location.assign("https://www.instagram.com/rilepetliving/");
    }
    
    useFrame((_, delta) => {
        instRef.current.rotation.y += 0.5 * delta;
    });

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
      }, [hovered]);
    return (
        <>
       
            <group onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} ref={instRef} onClick={handleClick}>
                <group>
                <mesh geometry={nodes.instagram.geometry} material={materials['Material.009']} position={[1.63, 1.436, -0.246]} rotation={[0, 1.571, 0]} scale={[0.15, 0.25, 0.25]} />
                <mesh geometry={nodes.krugovi.geometry} material={nodes.krugovi.material} position={[1.63, 1.436, -0.426]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.1, 0.03, 0.1]} />
                </group>
            </group>
            
        </>
    )
}

export default Instagram;