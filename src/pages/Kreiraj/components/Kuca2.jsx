import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";



const Kuca2 = (props) => {
    
    // const kuca2 = useLoader(GLTFLoader, './kuca2/kucica22.glb');
    const { nodes, materials } = useGLTF('Kreiraj/kuca2/kucica22.glb');
    const kucaRef = useRef();
   
 useFrame((_, delta) => {
    //  kucaRef.current.rotation.x += delta
    kucaRef.current.rotation.y += 0.5 * delta
  })
    return (
        <group {...props} dispose={null} scale={3} ref={kucaRef} position={[0, -0.1, 0]} >
            <mesh geometry={nodes.Cube002.geometry} scale-z={1.1} scale-y={1.1} castShadow receiveShadow>
                <meshStandardMaterial color={props.bojaZida} metalness={0.4} roughness={0.2} />
            </mesh>
            <mesh geometry={nodes.grede.geometry} material={materials['Material.002']}
                position={[0, -0.153, 0.23]} scale={[0.352, 0.008, 0.008]} />
            <mesh geometry={nodes.platno.geometry} position={[-0.001, -0.157, 0.24]} scale={[0.324, 0.0016, 0.0016]} castShadow receiveShadow>
                <meshBasicMaterial map={props.bojaKrova} />
            </mesh>
            <group position={[-0.004, -0.245, -0.009]} rotation={[0.069, -0.664, -3.098]}>
                <mesh geometry={nodes.Cube007.geometry} material={materials.Material} />
                <mesh geometry={nodes.Cube007_1.geometry} material={materials.Material} />
            </group>
        </group>
    )
}
useGLTF.preload('Kreiraj/kuca2/kucica22.glb');
export default Kuca2;