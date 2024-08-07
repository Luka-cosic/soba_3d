import { useLoader } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useEffect, useState } from "react";

const LopteSto = ({ setPaintTable }) => {

    const [hovered, setHovered] = useState(false);
    const drvoSto = useLoader(TextureLoader, 'images/drvoSto.jpg');
    const granit = useLoader(TextureLoader, 'images/granit.jpg');

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
      }, [hovered]);

    return (
        <group position={[-2, 2.5, 3]} rotation={[0, -0.5, 0]} >
            <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} position={[0, 0, 0]} onClick={() => { setPaintTable({ color: "#e6e6e6", map: false }) }} >
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial color="#e6e6e6" />
            </mesh>
            <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} position={[0, 0, 1]} onClick={() => { setPaintTable({ color: drvoSto, map: true }) }} >
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial map={drvoSto} />
            </mesh>
            <mesh onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} position={[0, 0, 2]} onClick={() => { setPaintTable({ color: granit, map: true }) }}>
                <sphereGeometry args={[0.3, 32, 32]} />
                <meshStandardMaterial map={granit} />
            </mesh>
        </group>
    )
}

export default LopteSto;